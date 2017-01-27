export default function reducer(state={
  user: {
    name: null,
  },
}, action) {

  switch (action.type) {

    case 'LOGIN_RESPONSE_FULFILLED': {
        return {
          ...state,
          user: {...state.user, email: action.payload.email,
                                username: action.payload.username,
                                user_id:  action.payload.id
                              },
        };
      }      
    default:
      return state;
  }
