import { expect, it } from "vitest";
import { Magma } from "./index.js";

it("integers with addition", () => {
	const m: Magma<number> = {
		concat(a, b) {
			return a + b;
		},
	};

	expect(m.concat(1, 2)).toBe(3);
	expect(m.concat(2, 3)).toBe(5);
	expect(m.concat(1, m.concat(2, 3))).toEqual(m.concat(m.concat(1, 2), 3));
});
