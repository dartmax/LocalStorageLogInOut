import React, {useEffect} from 'react'
import {useDispatch} from "react-redux";

import { userLogout } from "../redux/redux-composed";
import {withRouter} from "react-router-dom";

const Logout = ({history}) => {
  const dispatch = useDispatch();

  useEffect(() => {
      dispatch(userLogout())
  }, []);

  const goBack = (e) => {
    e.preventDefault();
    history.push('/login');
  }

  return (
    <div>
      <div>Back to Main page...</div>
      <button onClick={goBack}>Go back</button>
    </div>
  )
};

export default withRouter(Logout);
