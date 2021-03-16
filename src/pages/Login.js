import React, { useState } from 'react'
import { useDispatch } from "react-redux";
import { withRouter } from "react-router-dom";

import {userLogin} from "../redux-composed";

const Login = ({ history }) => {
  const [role, setRole] = useState('');

  const dispatch = useDispatch();

  const doLogin = (e) => {
    e.preventDefault();
    console.log("Logging in...", [role]);
    dispatch(userLogin(
      {role}
    ))
      .then(() => {
        history.push("/main");
      })
  };

  return (
    <form onSubmit={doLogin}>
      <input name="role" type="text" value={role}
             onChange={e => setRole(e.target.value)}/>
      <br />
      <button>Login</button>
    </form>
  )
};

export default withRouter(Login);
