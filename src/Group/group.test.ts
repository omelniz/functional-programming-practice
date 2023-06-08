import { it, expect, describe } from "vitest";
import { wallet, encrypt, decrypt } from "./index.js";

it("wallet group", () => {
	expect(wallet.concat(wallet.empty, wallet.empty)).toBe(0);
	expect(wallet.concat(1, wallet.inverse(1))).toBe(0);
	expect(wallet.concat(100, wallet.concat(50, wallet.inverse(30)))).toBe(120);
});

describe("Ceasar encrypt", () => {
	it("encrypt/decrypt", () => {
		const text = encrypt("sdfsdfdsfdsf", 10);
		expect(encrypt("sdfsdfdsfdsf", 10)).toEqual(decrypt(text, 10));
	});
});
