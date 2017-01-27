export default function reducer(state={
  auth: {
    access_token: null,
    loggedIn: false
  }
}, action) {

  switch (action.type) {
    case 'LOGIN_RESPONSE_FULFILLED': {
        return {
          ...state,
          auth: {...state.auth, access_token: action.payload.access_token, loggedIn: true},
        };
      }

    case 'LOGOUT_RESPONSE_FULFILLED': {
      return{
        ...state,
        auth:{...state.auth, access_token: null, loggedIn: false}
      };
    }
    
    default:
      return state;
  }
}
