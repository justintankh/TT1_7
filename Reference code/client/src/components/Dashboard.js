import React from 'react';
import logo from '../assets/logo.png'
import { getUser,removeUserSession } from '../Utils/Common';

export const Dashboard = (props) => {

  const user = getUser();

  const handleLogout = () => {
    removeUserSession();
    props.history.push('/login')
  }
  return (
    <div className="Home">
      <h4>Welcome to Dashboard</h4>
      Hello {user.name} <br /><br />
      <input type="button" value="Logout" onClick={handleLogout}/><br /><br />
      <img src= {logo} alt="Logo" />;
    </div>
  );
}

// export default Home;