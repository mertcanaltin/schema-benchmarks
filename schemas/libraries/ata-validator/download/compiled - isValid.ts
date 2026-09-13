// doesn't support custom keywords (instanceof, typeof)
// which is why no runtime benchmarks are included (wouldn't be a fair comparison)
import { isValid } from "../compiled/product.compiled.mjs";

isValid({});
