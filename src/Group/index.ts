import { Monoid } from "../Monoid/index.js";
import { addMonoid } from "../Monoid/index.js";

interface Group<A> extends Monoid<A> {
	inverse: (a: A) => A;
}

export const wallet: Group<number> = {
	...addMonoid,
	inverse: (a: number) => -a,
};
