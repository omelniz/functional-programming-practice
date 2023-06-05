import { expect, it } from "vitest";
import { some, none } from "../Option/index.js";
import { match, matchW } from "./option-match.js";

it("return the same type for some and none", () => {
	const hello = match(
		() => "Hello, user!",
		(name: string) => `Hello, ${name}!`,
	);

	expect(hello(some("Alex"))).toBe("Hello, Alex!");
	expect(hello(some("Elon"))).toBe("Hello, Elon!");
	expect(hello(none)).toBe("Hello, user!");
});

it("could return different type for some and none", () => {
	const age = matchW(
		() => -1,
		(age: number) => `Age is ${age}`,
	);

	expect(age(some(20))).toBe("Age is 20");
	expect(age(some(30))).toBe("Age is 30");
	expect(age(none)).toBe(-1);
});
