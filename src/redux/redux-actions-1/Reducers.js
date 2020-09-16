import { ADD_TODO, SUB_TODO, MUT_TODO, DIV_TODO, SQR_TODO } from './Actions.js';
import { handleActions } from 'redux-actions';

const initState = {operator: "", result: 0};

export const Reducer = handleActions(
    {
        ADD_TODO: (state, action) => {
            let {a, b} = action.payload;
            return {operator: "add", result:a + b};
        },

        SUB_TODO: (state, action) => {
            let {a, b} = action.payload;
            return {operator: "sub", result:a - b};
        },

        MUT_TODO: (state, action) => {
            let {a, b} = action.payload;
            return {operator: "mut", result:a * b};
        },

        DIV_TODO: (state, action) => {
            let {a, b} = action.payload;
            return {operator: "div", result:a / b};
        },

        SQR_TODO: (state, action) => {
            let x = action.payload;
            return {operator: "sqr", result: x*x};
        },
    },

    initState
)
