import React from 'react';
import { Provider } from "react-redux";
import Caculator from './Caculator';
import { store } from './Caculator';

export default class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Provider store={store}>
                <Caculator />
            </Provider>
        )
    }
}


