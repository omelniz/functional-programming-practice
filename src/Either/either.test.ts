import { it, expect } from "vitest";
import { left, right, Either } from "./index.js";

const divide = (x: number, y: number): Either<string, number> => {
	if (typeof x !== "number") {
		return left("x should be number");
	}

	if (typeof y !== "number") {
		return left("y should be number");
	}

	if (y === 0) {
		return left("cannot be divided by zero");
	}

	return right(x / y);
};

it("divide", () => {
	expect(divide(4, 2)).toEqual(right(2));
	expect(divide(2, 2)).toEqual(right(1));
	expect(divide(4, 0)).toEqual(left("cannot be divided by zero"));
	expect(divide(undefined, 0)).toEqual(left("x should be number"));
	expect(divide(null, 0)).toEqual(left("x should be number"));
	expect(divide(4, undefined)).toEqual(left("y should be number"));
	expect(divide(2, null)).toEqual(left("y should be number"));
});
