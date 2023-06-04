import { describe, it, expect } from "vitest";
import { toUpperCase } from "./log.js";

describe("test", () => {
	it("first", () => {
		expect(toUpperCase("aBc")).toBe("ABC");
	});
});
