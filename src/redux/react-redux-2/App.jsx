import React from 'react';
import './App.css';
import store from "./Store";
import MainPage from "./MainPage";
import { Provider } from "react-redux";

export default class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Provider store={store}>
                <MainPage />
            </Provider>
        );
    }
}
