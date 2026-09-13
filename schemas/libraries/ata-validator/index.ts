import { withKeywords } from "@ata-project/keywords";
import { Validator } from "ata-validator";
import { t } from "ata-validator/t";

import type { ProductData } from "#src";

// The schema itself, exported so generate.ts compiles the same one this entry
// validates with. Keeping them in one place is what stops the checked-in
// compiled module from drifting when the dependency moves.
export function getAtaValidatorProductSchema() {
  const dateSchema = t.object({}, { instanceof: "Date" });

  const imageSchema = t.object({
    id: t.number(),
    created: dateSchema,
    title: t.string({ minLength: 1, maxLength: 100 }),
    type: t.enum(["jpg", "png"]),
    size: t.number(),
    url: t.string({ format: "uri" }),
  });

  const ratingSchema = t.object({
    id: t.number(),
    stars: t.number({ minimum: 1, maximum: 5 }),
    title: t.string({ minLength: 1, maxLength: 100 }),
    text: t.string({ minLength: 1, maxLength: 1000 }),
    images: t.array(imageSchema),
  });

  const productSchema = t.object({
    id: t.number(),
    created: dateSchema,
    title: t.string({ minLength: 1, maxLength: 100 }),
    brand: t.string({ minLength: 1, maxLength: 30 }),
    description: t.string({ minLength: 1, maxLength: 500 }),
    price: t.number({ minimum: 1, maximum: 10000 }),
    discount: t.union([t.number({ minimum: 1, maximum: 100 }), t.null()]),
    quantity: t.number({ minimum: 0, maximum: 10 }),
    tags: t.array(t.string({ minLength: 1, maxLength: 30 })),
    images: t.array(imageSchema),
    ratings: t.array(ratingSchema),
  });

  return productSchema;
}

export function getAtaValidatorSchema() {
  return withKeywords(new Validator(getAtaValidatorProductSchema())) as Validator<ProductData>;
}
