import { Monoid } from "../Monoid/index.js";
import { addMonoid } from "../Monoid/index.js";

interface Group<A> extends Monoid<A> {
	inverse: (a: A) => A;
}

export const wallet: Group<number> = {
	...addMonoid,
	inverse: (a: number) => -a,
};

type Encrypt = (text: string, key: number) => string;
type Decrypt = (text: string, key: number) => string;

const abc = "abcdefghijklmnopqrstuvwxyz";

const caesarGroup: Group<number> = {
	empty: 0,
	concat: (a, b) => (a + b) % abc.length,
	inverse: (a) => (abc.length - a) % abc.length,
};

export const encrypt: Encrypt = (text, key) => {
	return text
		.toLowerCase()
		.split("")
		.map((char) => {
			if (abc.indexOf(char) === -1) {
				return char;
			}

			return caesarGroup.concat(abc.indexOf(char), key);
		})
		.join("");
};

export const decrypt: Decrypt = (text, key) =>
	encrypt(text, caesarGroup.inverse(key));
