import { combineReducers } from 'redux';
import counter from './Reducer1';
import description from './Reducer2';

const rootReducer = combineReducers( {
    counter,
    description
} );

export default rootReducer;
