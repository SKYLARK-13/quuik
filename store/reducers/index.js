import authenticate from './auth';
import {combineReducers} from 'redux';

const rootReducer = combineReducers({
  authenticate,
});

export default rootReducer;
