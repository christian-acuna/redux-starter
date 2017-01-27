import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import session from './sessionReducer'


export default combineReducers({
  routing: routerReducer,
  session: session
});
