import { it, expect } from "vitest";
import { isNone, some, none, Option } from "./index.js";

const divideTwo = (x: Option<number>): Option<number> =>
	isNone(x) ? none : x.value === 0 ? none : some(x.value / 2);

const toLowerCase = (s: Option<string>): Option<String> =>
	isNone(s)
		? none
		: typeof s.value === "string"
		? some(s.value.toLowerCase())
		: none;

it("divideTwo", () => {
	expect(divideTwo(some(0))).toEqual(none);
	expect(divideTwo(some(10))).toEqual(some(5));
	expect(divideTwo(none)).toEqual(none);
});

it("toLowerCase", () => {
	expect(toLowerCase(1)).toEqual(none);
	expect(toLowerCase("FSD")).toEqual(none);
	expect(toLowerCase(some("FSD"))).toEqual(some("fsd"));
	expect(toLowerCase(some(1))).toEqual(none);
	expect(toLowerCase(none)).toEqual(none);
});
