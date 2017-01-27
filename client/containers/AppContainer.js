import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import App from '../components/App';

import * as sessionActions from '../actions/sessionActions';


function mapStateToProps(state) {
  return {
    session: state.session,
  };
}

function mapDispachToProps(disptach) {
  return bindActionCreators(Object.assign({}, sessionActions), disptach);
}

const AppConnect = connect(mapStateToProps, mapDispachToProps)(App);

export default AppConnect;
