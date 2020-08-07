import React from 'react';
import { createStore } from 'redux';
import Reducer from './Reducers';
import { add, sub, mut, div, sqr } from './Actions';

const store = createStore(Reducer);

export default class Caculator extends React.Component {
    constructor(props) {
        super(props);
        this.state = {operator: "", result: 0};
    }

    componentDidMount() {
        store.subscribe(() => {
            let state = store.getState();
            this.setState(state);
        });
    }

    render() {
        return (
            <>
                <p>{this.state.operator} {this.state.result}</p>
                <button onClick={()=>{store.dispatch(add(3, 2))}}>Add</button>
                <button onClick={()=>{store.dispatch(sub(10, 3))}}>Sub</button>
                <button onClick={()=>{store.dispatch(mut(4, 3))}}>Mult</button>
                <button onClick={()=>{store.dispatch(div(7, 8))}}>Div</button>
                <button onClick={()=>{store.dispatch(sqr(5))}}>Sqrt</button>
            </>
        )
    }
}
