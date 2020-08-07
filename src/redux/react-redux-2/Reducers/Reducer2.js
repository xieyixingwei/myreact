import * as ActionTypes from '../Actions/ActionType'

const initialState = {
    operator: "null",
    clickNum: 0
};

export default (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.INCREMENT:
            return {operator: "Add", clickNum: state.clickNum + 1};
        case ActionTypes.DECREMENT:
            return {operator: "Sub", clickNum: state.clickNum + 1};
        default:
            return state;
    }
}
