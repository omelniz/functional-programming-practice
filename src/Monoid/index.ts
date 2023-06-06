import {
	Semigroup,
	addSemigroup,
	multiplySemigroup,
	appendSemigroup,
} from "../Semigroup/index.js";

export interface Monoid<A> extends Semigroup<A> {
	empty: A;
}

export const addMonoid: Monoid<number> = { ...addSemigroup, empty: 0 };
export const multiplyMonoid: Monoid<number> = {
	...multiplySemigroup,
	empty: 1,
};
export const appendMonoid: Monoid<string> = { ...appendSemigroup, empty: "" };

export const concatAll =
	<A>(m: Monoid<A>) =>
	(xs: Array<A>): A =>
		!xs[0] ? m.empty : m.concat(xs[0], concatAll(m)(xs.slice(1)));
