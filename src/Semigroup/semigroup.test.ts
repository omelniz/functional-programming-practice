import { expect, it, describe } from "vitest";
import { Magma } from "../Magma/index.js";
import {
	Semigroup,
	addSemigroup,
	multiplySemigroup,
	appendSemigroup,
	concatAll,
} from "./index.js";

describe("Examples of Semigroup", () => {
	/**
	 * Should be associative
	 * f ○ (g ○ z) === (f ○ g) ○ z
	 **/

	it("numbers with addition", () => {
		const m = addSemigroup;

		expect(m.concat(1, 2)).toBe(3);
		expect(m.concat(2, 3)).toBe(5);
		expect(m.concat(1, m.concat(2, 3))).toEqual(m.concat(m.concat(1, 2), 3));
	});

	it("numbers with multiplication", () => {
		const m = multiplySemigroup;

		expect(m.concat(1, 2)).toBe(2);
		expect(m.concat(2, 3)).toBe(6);
		expect(m.concat(1, m.concat(2, 3))).toEqual(m.concat(m.concat(1, 2), 3));
	});

	it("array with contatenation", () => {
		const m: Semigroup<Array<number>> = {
			concat(a, b) {
				return a.concat(b);
			},
		};

		expect(m.concat([1, 2], [3, 4])).toEqual([1, 2, 3, 4]);
		expect(m.concat([1], m.concat([2], [3]))).toEqual(
			m.concat(m.concat([1], [2]), [3]),
		);
	});

	it("strings with contatenation", () => {
		const m = appendSemigroup;

		expect(m.concat("Hello ", "world")).toEqual("Hello world");
		expect(m.concat("a", m.concat("b", "c"))).toEqual(
			m.concat(m.concat("a", "b"), "c"),
		);
	});
});

describe("Examples of Magma that are not Semigroup", () => {
	it("numbers with subtraction", () => {
		const m: Magma<number> = {
			concat(a, b) {
				return a - b;
			},
		};

		expect(m.concat(1, 2)).toBe(-1);
		expect(m.concat(2, 3)).toBe(-1);
		expect(m.concat(1, m.concat(2, 3))).not.toEqual(
			m.concat(m.concat(1, 2), 3),
		);
	});

	it("numbers with division", () => {
		const m: Magma<number> = {
			concat(a, b) {
				return a / b;
			},
		};

		expect(m.concat(1, 2)).toBe(0.5);
		expect(m.concat(3, 3)).toBe(1);
		expect(m.concat(1, m.concat(2, 3))).not.toEqual(
			m.concat(m.concat(1, 2), 3),
		);
	});
});

describe("concat all", () => {
	it("concat all with addSemigroup", () => {
		expect(concatAll(addSemigroup)(0)([1, 2, 3])).toEqual(6);
		expect(concatAll(addSemigroup)(0)([3, 6, 1])).toEqual(10);
		expect(concatAll(addSemigroup)(0)([])).toEqual(0);
	});

	it("concat all with multiplySemigroup", () => {
		expect(concatAll(multiplySemigroup)(1)([1, 2, 3])).toEqual(6);
		expect(concatAll(multiplySemigroup)(1)([3, 6, 1])).toEqual(18);
		expect(concatAll(multiplySemigroup)(1)([])).toEqual(1);
	});

	it("concat all with appendSemigroup", () => {
		expect(concatAll(appendSemigroup)("")(["Hello", " ", "world"])).toEqual(
			"Hello world",
		);
		expect(concatAll(appendSemigroup)("")([])).toEqual("");
	});
});
