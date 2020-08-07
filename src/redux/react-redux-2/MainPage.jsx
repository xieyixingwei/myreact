import React from 'react';
import { connect } from 'react-redux';
import * as Action from './Actions';

class MainPage extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { increment, decrement } = this.props;

        return (
            <div className="container">
                <h1 className="text-center mt-5">{this.props.count}</h1>
                <h1 className="text-center mt-5">{this.props.des.operator} {this.props.des.clickNum}</h1>
                
                <p className="text-center">
                    <button onClick={() => increment()} className="btn btn-primary mr-2">Increment</button>
                    <button onClick={() => decrement()} className="btn btn-danger my-2">Decrement</button>
                </p>
            </div>
        );
    }
}

const mapStateToProps = state => ( {
    count: state.counter,
    des: state.description
} );

export default connect(mapStateToProps, Action)(MainPage);
