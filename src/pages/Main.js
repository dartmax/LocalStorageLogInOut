import React from "react";
import { withRouter } from "react-router-dom";
import {selectIsAuth} from "../redux-composed";
import {useSelector} from "react-redux";
import MyContacts from "./contacts/MyContacts";

const MainPage = ({history}) => {
  const getUser = () => {
    let user = {};
    const localUser = localStorage.getItem('user')
    if (localUser) {
      user = JSON.parse(localUser);
      return user.payload.role.role;
    }
  }
debugger;
  const myRole = useSelector(selectIsAuth)

  const logout = (e) => {
    e.preventDefault();
    history.push('/logout');
  }

  return (
    <div className="header">
      <h1>{`Hello ${getUser()}`}</h1>
      <button onClick={logout}>Logout</button>
      <MyContacts />
    </div>
  );
};

export default withRouter(MainPage)
