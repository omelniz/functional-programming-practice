import { it, expect } from "vitest";
import { wallet } from "./index.js";

it("wallet group", () => {
	expect(wallet.concat(wallet.empty, wallet.empty)).toBe(0);
	expect(wallet.concat(1, wallet.inverse(1))).toBe(0);
	expect(wallet.concat(100, wallet.concat(50, wallet.inverse(30)))).toBe(120);
});
