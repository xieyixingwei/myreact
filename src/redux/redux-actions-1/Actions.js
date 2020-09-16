import { createAction } from 'redux-actions';

export const ADD_TODO = "ADD_TODO";
export const SUB_TODO = "SUB_TODO";
export const MUT_TODO = "MUT_TODO";
export const DIV_TODO = "DIV_TODO";
export const SQR_TODO = "SQR_TODO";


export const add = createAction(ADD_TODO);
export const sub = createAction(SUB_TODO);
export const mut = createAction(MUT_TODO);
export const div = createAction(DIV_TODO);
export const sqr = createAction(SQR_TODO);
