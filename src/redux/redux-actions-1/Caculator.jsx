import React from 'react';
import { createStore } from 'redux';
import { Reducer } from './Reducers';
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
                <button onClick={()=>{store.dispatch(add({a:3, b:2}))}}>Add</button>
                <button onClick={()=>{store.dispatch(sub({a:10,b:3}))}}>Sub</button>
                <button onClick={()=>{store.dispatch(mut({a:4, b:3}))}}>Mult</button>
                <button onClick={()=>{store.dispatch(div({a:7, b:8}))}}>Div</button>
                <button onClick={()=>{store.dispatch(sqr(5))}}>Sqrt</button>
            </>
        )
    }
}
