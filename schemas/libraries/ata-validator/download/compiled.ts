// The compiled variant: the validator ata emits at build time for the product
// schema, checked in as ../compiled/product.validator.mjs. It imports nothing
// from ata-validator, which is the point of that mode; the runtime entry is
// ./index.ts.
import { isValid, validate } from "../compiled/product.validator.mjs";

validate({});
isValid({});
