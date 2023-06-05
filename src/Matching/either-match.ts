import { Either, isLeft } from "../Either/index.js";

type EitherMatch = <E, A, B>(
	onLeft: (e: E) => B,
	onRight: (a: A) => B,
) => (x: Either<E, A>) => B;

export const match: EitherMatch = (onLeft, onRight) => (x) =>
	isLeft(x) ? onLeft(x.left) : onRight(x.right);
