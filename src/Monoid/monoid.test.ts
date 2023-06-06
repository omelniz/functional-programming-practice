import { it, expect } from "vitest";
import { concatAll, addMonoid, multiplyMonoid, appendMonoid } from "./index.js";

it("concat all with addMonoid", () => {
	expect(concatAll(addMonoid)([1, 2, 3])).toEqual(6);
	expect(concatAll(addMonoid)([3, 6, 1])).toEqual(10);
	expect(concatAll(addMonoid)([])).toEqual(0);
});

it("concat all with multiplyMonoid", () => {
	expect(concatAll(multiplyMonoid)([1, 2, 3])).toEqual(6);
	expect(concatAll(multiplyMonoid)([3, 6, 1])).toEqual(18);
	expect(concatAll(multiplyMonoid)([])).toEqual(1);
});

it("concat all with appendMonoid", () => {
	expect(concatAll(appendMonoid)(["Hello", " ", "world"])).toEqual(
		"Hello world",
	);
	expect(concatAll(appendMonoid)([])).toEqual("");
});
