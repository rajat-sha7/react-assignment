// import { createStore } from 'redux';

// import authReducer from "./reducer/reducer"



// const store = createStore(authReducer);

// export default store;



// store.js




import { createStore } from 'redux';

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

const store = createStore(authReducer);

export default store;
