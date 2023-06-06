import { Magma } from "../Magma/index.js";

export interface Semigroup<A> extends Magma<A> {}

export const addSemigroup: Semigroup<number> = { concat: (a, b) => a + b };
export const multiplySemigroup: Semigroup<number> = { concat: (a, b) => a * b };
export const appendSemigroup: Semigroup<string> = {
	concat: (a, b) => a.concat(b),
};

export const concatAll =
	<A>(s: Semigroup<A>) =>
	(defaultValue: A) =>
	(xs: Array<A>): A => {
		const [head, ...tail] = xs;

		return !head
			? defaultValue
			: s.concat(head, concatAll(s)(defaultValue)(tail));
	};
