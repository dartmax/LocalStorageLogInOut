import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";

export const initialState = {
  user: readUserFromLocalStorage(),
};

// Reducer
export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case "USER_LOGIN":
      return {
        user: payload.role
      };
    case "USER_LOGOUT":
      return {
        user: null,
      };
    default:
      return state;
  }
};

// Store
export const store = createStore(
  reducer,
  initialState,
  applyMiddleware(thunk, logger)
);

export const selectIsAuth = (store) => {
  return store.user.role
}
// Actions
export const userLogin = (role) => dispatch => {
  return timeoutPromise(1000)
    .then(() => (
      dispatch({
        type: "USER_LOGIN",
        payload: {
          role: role,
          token: "token7j34e8ffdjg348",
        }
      }))
    )
    .then((data) => {
      console.log("THEN: ", data);
      localStorage.setItem("user", JSON.stringify(data));
    });
}

export const userLogout = () => dispatch => {
  localStorage.clear();
  return dispatch({
    type: "USER_LOGOUT"
  });
};

// Helpers
const timeoutPromise = (ms) => {
  let ctr, rej;
  const promise = new Promise(function (resolve, reject) {
    ctr = setTimeout(resolve, ms);
    rej = reject;
  });
  promise.cancel = () => {
    clearTimeout(ctr);
    rej(Error("Cancelled"))
  };
  return promise;
}

// Read user from the localStorage
function readUserFromLocalStorage() {
  try {
    const serialized = localStorage.getItem('user');
    if (serialized === null) {
      return undefined;
    }
    return JSON.parse(serialized);
  }
  catch (err) {
    return undefined;
  }
}