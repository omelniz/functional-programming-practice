import { Option, isNone } from "../Option/index.js";

/**
 *
 */
type Match = <A, B>(
	onNone: () => B,
	onSome: (a: A) => B,
) => (x: Option<A>) => B;

export const match: Match = (onNone, onSome) => (x) =>
	isNone(x) ? onNone() : onSome(x.value);

/**
 *
 */
type MatchW = <A, B, C>(
	onNone: () => B,
	onSome: (a: A) => C,
) => (x: Option<A>) => B | C;

export const matchW: MatchW = (onNone, onSome) => (x) =>
	isNone(x) ? onNone() : onSome(x.value);
