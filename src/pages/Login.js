import React, { useState } from 'react'
import { useDispatch } from "react-redux";
import {userLogin} from "../redux/redux-composed";

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
        if(role) {
          history.push("/main");
        } else {
          history.push("/login");
        }
      })
  };

  return (
    <form onSubmit={doLogin}>
      <input
        name="role"
        type="text"
        value={role}
        onChange={e => setRole(e.target.value)}
        placeholder="Your Name"
      />
      <br />
      <button>Login</button>
    </form>
  )
};

export default Login;
