export function setAuthToken(token) {
  return {
    type: 'LOGIN_RESPONSE_FULFILLED', payload: token
  };
}
