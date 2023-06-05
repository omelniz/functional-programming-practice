import { it, expect } from "vitest";
import { right, left, Either } from "../Either/index.js";
import { match } from "ts-pattern";

it("printDay match using ts-pattern lib", () => {
	const printDay = (a: Either<string, number>) =>
		match(a)
			.with({ _tag: "Left" }, ({ left }) => `Error: ${left}`)
			.with({ _tag: "Right" }, ({ right }) => `Day is ${right}`)
			.exhaustive();

	expect(printDay(right(5))).toBe("Day is 5");
	expect(printDay(right(15))).toBe("Day is 15");
	expect(printDay(left("Not a number"))).toBe("Error: Not a number");
});
