import {userLogin} from "./redux-composed";

export let initialState = {
  initialized: false,
};

const appReducer = (state = initialState, action) => {
  switch (action.type){
    case 'INITIALIZED_SUCCESS':
      return {
        ...state,
        initialized: true,
      };
    default:
      return state;
  }
};


export const actions = {
  initializedSuccess: () => ({type: 'INITIALIZED_SUCCESS'}),
}


export const initializeApp = () => (dispatch) => {
  let promiseAll = dispatch(userLogin());
  Promise.all([promiseAll])
    .then(() =>{
      dispatch(actions.initializedSuccess());
    })
}

export default appReducer;