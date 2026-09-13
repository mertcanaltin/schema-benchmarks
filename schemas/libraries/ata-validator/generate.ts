import * as fs from "node:fs";
import * as path from "node:path";

import { build } from "ata-validator/build";

import { getAtaValidatorProductSchema } from "./index.ts";

// Ahead-of-time compile the shared ata schema into a standalone module, which
// is what `ata build` emits and what the compiled download variant imports.
// Re-run with `pnpm run gen:ata-validator` whenever the schema or the
// dependency changes.
//
// `instanceof` comes from @ata-project/keywords and has no JSON Schema
// spelling, so a compiled module cannot carry it: `created` is checked as a
// plain object there. Stripping it here rather than keeping a second copy of
// the schema by hand is what stops this module and ./index.ts from drifting.
function withoutCustomKeywords(schema: unknown): unknown {
  if (Array.isArray(schema)) return schema.map(withoutCustomKeywords);
  if (schema === null || typeof schema !== "object") return schema;
  return Object.fromEntries(
    Object.entries(schema as Record<string, unknown>)
      .filter(([key]) => key !== "instanceof" && key !== "typeof")
      .map(([key, value]) => [key, withoutCustomKeywords(value)]),
  );
}

const outDir = path.join(import.meta.dirname, "compiled");
fs.mkdirSync(outDir, { recursive: true });

// build() reads schemas from disk, so the stripped schema is written first.
// It stays next to its output, where it also documents what was compiled.
const schemaPath = path.join(outDir, "product.schema.json");
fs.writeFileSync(
  schemaPath,
  `${JSON.stringify(withoutCustomKeywords(getAtaValidatorProductSchema()), null, 2)}\n`,
);

const result = await build({
  globs: [schemaPath],
  outDir,
  format: "esm",
});

if (result.failed?.length) {
  throw new Error(`ata could not compile the product schema: ${JSON.stringify(result.failed)}`);
}
