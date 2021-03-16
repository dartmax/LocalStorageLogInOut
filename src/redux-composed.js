export const initialState = {
  user: readUserFromLocalStorage(),
};

// Reducer
export const userReducer = (state, { type, payload }) => {
  switch (type) {
    case "USER_LOGIN":
      return {
        user: payload
      };
    case "USER_LOGOUT":
      return {
        user: {},
      };
    default:
      return state;
  }
};


// Actions
export const userLogin = (user) => dispatch => {
  return timeoutPromise(1000)
    .then(() => (
      dispatch({
        type: "USER_LOGIN",
        payload: {
          user: user.role,
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

export const selectIsAuth = (state) => {
  return state.user.user;
}

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
export function readUserFromLocalStorage() {
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
debugger;
