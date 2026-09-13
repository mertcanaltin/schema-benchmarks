//#region ../schemas/libraries/ata-validator/compiled/product.compiled.mjs
function _cpLen(s) {
	const len = s.length;
	for (let i = 0; i < len; i++) if (s.charCodeAt(i) - 55296 >>> 0 < 1024) {
		let n = 0;
		for (const _ of s) n++;
		return n;
	}
	return len;
}
Object.freeze({
	valid: true,
	errors: Object.freeze([])
});
Object.freeze({
	valid: false,
	errors: Object.freeze([Object.freeze({
		code: "ATA9000",
		message: "validation failed",
		keyword: "__abort_early__",
		path: ""
	})])
});
function _af0_b0(_av) {
	if (typeof _av !== "number" || !isFinite(_av)) return false;
	if (_av < 1) return false;
	if (_av > 100) return false;
	return true;
}
function _af0_b1(_av) {
	if (_av !== null) return false;
	return true;
}
const _fn = function(d) {
	if (typeof d !== "object" || d === null || Array.isArray(d)) return false;
	if (d["discount"] === void 0) return false;
	if (typeof d["id"] !== "number" || !isFinite(d["id"])) return false;
	if (typeof d["created"] !== "object" || d["created"] === null || Array.isArray(d["created"])) return false;
	{
		const _v = d["title"];
		if (typeof _v !== "string") return false;
		const _lv = _v.length;
		if (_lv < 1 || _lv > 200) return false;
		if (_lv < 2 || _lv > 100) {
			const _cp = _cpLen(_v);
			if (_cp < 1 || _cp > 100) return false;
		}
	}
	{
		const _v = d["brand"];
		if (typeof _v !== "string") return false;
		const _lv = _v.length;
		if (_lv < 1 || _lv > 60) return false;
		if (_lv < 2 || _lv > 30) {
			const _cp = _cpLen(_v);
			if (_cp < 1 || _cp > 30) return false;
		}
	}
	{
		const _v = d["description"];
		if (typeof _v !== "string") return false;
		const _lv = _v.length;
		if (_lv < 1 || _lv > 1e3) return false;
		if (_lv < 2 || _lv > 500) {
			const _cp = _cpLen(_v);
			if (_cp < 1 || _cp > 500) return false;
		}
	}
	{
		const _v = d["price"];
		if (typeof _v !== "number" || !isFinite(_v) || _v < 1 || _v > 1e4) return false;
	}
	if (!(_af0_b0(d["discount"]) || _af0_b1(d["discount"]))) return false;
	{
		const _v = d["quantity"];
		if (typeof _v !== "number" || !isFinite(_v) || _v < 0 || _v > 10) return false;
	}
	if (!Array.isArray(d["tags"])) return false;
	for (let _j1 = 0; _j1 < d["tags"].length; _j1++) {
		const _e1 = d["tags"][_j1];
		if (typeof _e1 !== "string") return false;
		{
			const _l2 = _e1.length;
			if (_l2 < 1 || _l2 > 60) return false;
			if (_l2 < 2 || _l2 > 30) {
				const _cp = _cpLen(_e1);
				if (_cp < 1 || _cp > 30) return false;
			}
		}
	}
	if (!Array.isArray(d["images"])) return false;
	for (let _j3 = 0; _j3 < d["images"].length; _j3++) {
		const _e3 = d["images"][_j3];
		if (typeof _e3 !== "object" || _e3 === null || Array.isArray(_e3)) return false;
		if (typeof _e3["id"] !== "number" || !isFinite(_e3["id"])) return false;
		if (typeof _e3["created"] !== "object" || _e3["created"] === null || Array.isArray(_e3["created"])) return false;
		{
			const _v = _e3["title"];
			if (typeof _v !== "string") return false;
			const _lv = _v.length;
			if (_lv < 1 || _lv > 200) return false;
			if (_lv < 2 || _lv > 100) {
				const _cp = _cpLen(_v);
				if (_cp < 1 || _cp > 100) return false;
			}
		}
		if (!(_e3["type"] === "jpg" || _e3["type"] === "png")) return false;
		if (typeof _e3["size"] !== "number" || !isFinite(_e3["size"])) return false;
		{
			const _r4 = _e3["url"];
			if (typeof _r4 !== "string") return false;
			{
				const _n = _r4.length;
				if (_n === 0) return false;
				const _f = _r4.charCodeAt(0);
				if (!(_f >= 97 && _f <= 122 || _f >= 65 && _f <= 90)) return false;
				let _co = -1;
				for (let _i = 1; _i < _n; _i++) {
					const _c = _r4.charCodeAt(_i);
					if (_c === 58) {
						_co = _i;
						break;
					}
					if (!(_c >= 48 && _c <= 57 || _c >= 97 && _c <= 122 || _c >= 65 && _c <= 90 || _c === 43 || _c === 45 || _c === 46)) return false;
				}
				if (_co === -1) return false;
				if (/[^\u0021-\u007e]/.test(_r4)) for (let _ri = _co + 1; _ri < _r4.length; _ri++) {
					const _rc = _r4.charCodeAt(_ri);
					if (_rc > 32 && _rc < 127) continue;
					if (_rc <= 32 || _rc === 127) return false;
					if (_rc === 160 || _rc === 5760 || _rc >= 8192 && _rc <= 8202 || _rc === 8232 || _rc === 8233 || _rc === 8239 || _rc === 8287 || _rc === 12288 || _rc === 65279) return false;
				}
			}
		}
	}
	if (!Array.isArray(d["ratings"])) return false;
	for (let _j5 = 0; _j5 < d["ratings"].length; _j5++) {
		const _e5 = d["ratings"][_j5];
		if (typeof _e5 !== "object" || _e5 === null || Array.isArray(_e5)) return false;
		if (typeof _e5["id"] !== "number" || !isFinite(_e5["id"])) return false;
		{
			const _v = _e5["stars"];
			if (typeof _v !== "number" || !isFinite(_v) || _v < 1 || _v > 5) return false;
		}
		{
			const _v = _e5["title"];
			if (typeof _v !== "string") return false;
			const _lv = _v.length;
			if (_lv < 1 || _lv > 200) return false;
			if (_lv < 2 || _lv > 100) {
				const _cp = _cpLen(_v);
				if (_cp < 1 || _cp > 100) return false;
			}
		}
		{
			const _v = _e5["text"];
			if (typeof _v !== "string") return false;
			const _lv = _v.length;
			if (_lv < 1 || _lv > 2e3) return false;
			if (_lv < 2 || _lv > 1e3) {
				const _cp = _cpLen(_v);
				if (_cp < 1 || _cp > 1e3) return false;
			}
		}
		if (!Array.isArray(_e5["images"])) return false;
		for (let _j6 = 0; _j6 < _e5["images"].length; _j6++) {
			const _e6 = _e5["images"][_j6];
			if (typeof _e6 !== "object" || _e6 === null || Array.isArray(_e6)) return false;
			if (typeof _e6["id"] !== "number" || !isFinite(_e6["id"])) return false;
			if (typeof _e6["created"] !== "object" || _e6["created"] === null || Array.isArray(_e6["created"])) return false;
			{
				const _v = _e6["title"];
				if (typeof _v !== "string") return false;
				const _lv = _v.length;
				if (_lv < 1 || _lv > 200) return false;
				if (_lv < 2 || _lv > 100) {
					const _cp = _cpLen(_v);
					if (_cp < 1 || _cp > 100) return false;
				}
			}
			if (!(_e6["type"] === "jpg" || _e6["type"] === "png")) return false;
			if (typeof _e6["size"] !== "number" || !isFinite(_e6["size"])) return false;
			{
				const _r7 = _e6["url"];
				if (typeof _r7 !== "string") return false;
				{
					const _n = _r7.length;
					if (_n === 0) return false;
					const _f = _r7.charCodeAt(0);
					if (!(_f >= 97 && _f <= 122 || _f >= 65 && _f <= 90)) return false;
					let _co = -1;
					for (let _i = 1; _i < _n; _i++) {
						const _c = _r7.charCodeAt(_i);
						if (_c === 58) {
							_co = _i;
							break;
						}
						if (!(_c >= 48 && _c <= 57 || _c >= 97 && _c <= 122 || _c >= 65 && _c <= 90 || _c === 43 || _c === 45 || _c === 46)) return false;
					}
					if (_co === -1) return false;
					if (/[^\u0021-\u007e]/.test(_r7)) for (let _ri = _co + 1; _ri < _r7.length; _ri++) {
						const _rc = _r7.charCodeAt(_ri);
						if (_rc > 32 && _rc < 127) continue;
						if (_rc <= 32 || _rc === 127) return false;
						if (_rc === 160 || _rc === 5760 || _rc >= 8192 && _rc <= 8202 || _rc === 8232 || _rc === 8233 || _rc === 8239 || _rc === 8287 || _rc === 12288 || _rc === 65279) return false;
					}
				}
			}
		}
	}
	return true;
};
function isValid(data) {
	return _fn(data);
}
//#endregion
//#region ../schemas/libraries/ata-validator/download/compiled - isValid.ts
isValid({});
//#endregion
