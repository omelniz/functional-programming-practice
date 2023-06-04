interface Some<A> {
	_tag: "Some";
	value: A;
}

interface None {
	_tag: "None";
}

export type Option<A> = Some<A> | None;

export const some = <A>(value: A): Option<A> => ({ _tag: "Some", value });
export const none: Option<never> = { _tag: "None" };
export const isNone = <A>(x: Option<A>): x is None => x._tag === "None";
