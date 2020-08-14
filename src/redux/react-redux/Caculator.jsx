import React from 'react';
import { createStore, bindActionCreators} from 'redux';
import { connect } from "react-redux";
import Reducer from './Reducers';
import { add, sub, mut, div, sqr } from './Actions';

export const store = createStore(Reducer);


class Caculator extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <>
                <p>{this.props.cal.operator} {this.props.cal.result}</p>
                <button onClick={()=>{this.props.dispatch(add(3, 2))}}>Add</button>
                <button onClick={()=>{this.props.dispatch(sub(10, 3))}}>Sub</button>
                <button onClick={()=>{this.props.dispatch(mut(4, 3))}}>Mult</button>
                <button onClick={()=>{this.props.dispatch(div(7, 8))}}>Div</button>
                <button onClick={()=>{this.props.dispatch(sqr(5))}}>Sqrt</button>
            </>
        )
    }
}

const mapStateToProps = state => ( {
    cal: state
} );

export default connect(mapStateToProps)(Caculator);


/*
class Caculator extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <>
                <p>{this.props.cal.operator} {this.props.cal.result}</p>
                <button onClick={()=>{this.props.add(3, 2)}}>Add</button>
                <button onClick={()=>{this.props.sub(10, 3)}}>Sub</button>
                <button onClick={()=>{this.props.mut(4, 3)}}>Mult</button>
                <button onClick={()=>{this.props.div(7, 8)}}>Div</button>
                <button onClick={()=>{this.props.sqr(5)}}>Sqrt</button>
            </>
        )
    }
}

const mapStateToProps = state => ( {
    cal: state
} );


const mapDispatchToProps = dispatch => bindActionCreators(
    {add, sub, mut, div, sqr},
    dispatch,
);

export default connect(mapStateToProps, mapDispatchToProps)(Caculator);
*/
