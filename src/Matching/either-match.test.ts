import { expect, it } from "vitest";
import { left, right } from "../Either/index.js";
import { match } from "./either-match.js";

it("match", () => {
	const printDay = match(
		(e: string) => `Error: ${e}`,
		(day: number) => `Day is ${day}`,
	);

	expect(printDay(right(5))).toBe("Day is 5");
	expect(printDay(right(15))).toBe("Day is 15");
	expect(printDay(left("Not a number"))).toBe("Error: Not a number");
});
