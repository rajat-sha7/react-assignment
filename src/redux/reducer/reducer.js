const initialState = {
    loggedIn: false
  };
  
  
  
  function authReducer(state = initialState, action) {
    switch (action.type) {
      case 'LOGIN':
        return {
          ...state,
          loggedIn: true
        };
      case 'LOGOUT':
        return {
          ...state,
          loggedIn: false
        };
      default:
        return state;
    }
  }

  export default authReducer;