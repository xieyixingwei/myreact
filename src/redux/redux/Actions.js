export const ADD_TODO = "ADD_TODO";
export const SUB_TODO = "SUB_TODO";
export const MUT_TODO = "MUT_TODO";
export const DIV_TODO = "DIV_TODO";
export const SQR_TODO = "SQR_TODO";

export let add = (a , b) => ( {
    type: ADD_TODO,
    payload: {a, b}
} );

export let sub = (a , b) => ( {
    type: SUB_TODO,
    payload: {a, b}
} );

export let mut = (a , b) => ( {
    type: MUT_TODO,
    payload: {a , b}
} );

export let div = (a , b) => ( {
    type: DIV_TODO,
    payload: {a , b}
} );

export let sqr = (x) => ( {
    type: SQR_TODO,
    payload: x
} );
