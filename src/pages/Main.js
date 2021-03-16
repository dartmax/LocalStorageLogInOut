import React from "react";
import MyContacts from "./contacts/MyContacts";

const MainPage = ({history}) => {
  const getUser = () => {
    let user = {};
    const localUser = localStorage.getItem('user')
    user = JSON.parse(localUser);

    if (!!user.payload.role) {
      return user.payload.role.role
    } else {
      history.push('/login');
    }
  }
  debugger;
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

export default MainPage;
