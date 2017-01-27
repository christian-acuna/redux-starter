import { createStore } from 'redux';
import { browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import reducer from './reducers';

let store = createStore(reducer);

export const history = syncHistoryWithStore(browserHistory, store);

export default store;
