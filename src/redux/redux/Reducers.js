import { ADD_TODO, SUB_TODO, MUT_TODO, DIV_TODO, SQR_TODO } from './Actions.js'

export default (state = {operator: "", result: 0}, action) => {
    let a = 0,
        b = 0;

    switch(action.type) {
        case ADD_TODO:
            ({a, b} = action.payload);
            return {operator: "add", result:a + b};

        case SUB_TODO:
            ({a, b} = action.payload);
            return {operator: "sub", result:a - b};

        case MUT_TODO:
            ({a, b} = action.payload);
            return {operator: "mut", result:a * b};

        case DIV_TODO:
            ({a, b} = action.payload);
            return {operator: "div", result:a / b};

        case SQR_TODO:
            let x = action.payload;
            return {operator: "sqrt", result: x * x};;

        default:
            return state;
    }
};
