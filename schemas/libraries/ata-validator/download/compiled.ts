// The compiled variant: the validator ata emits at build time for the product
// schema. ../generate.ts writes it from the same schema ./index.ts validates
// with, so the two cannot drift. It imports nothing from ata-validator,
// which is the point of that mode; the runtime entry is ./index.ts.
import { isValid, validate } from "../compiled/product.compiled.mjs";

validate({});
isValid({});
