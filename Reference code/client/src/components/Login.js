import React from 'react';
import axios from "axios";
import { useState } from 'react/cjs/react.development';
import logo from '../assets/logo.png'
import { setUserSession } from '../Utils/Common';

export const Login = (props) => {

  const [username,setUsername] = useState('');
  const [password,setPassowrd] = useState('');
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleLogin = () => {
    setError(null);
    setLoading(true);
    axios.post("http://localhost:4000/users/signin", {
      username: username,
      password: password
    }).then(response => {
      setLoading(false);
      setUserSession(response.data.token, response.data.user)
      props.history.push('/dashboard');
      console.log('response >>> ', response);
    }).catch(error => {
      setLoading(false);
      if(error.response.status === 401 || error.response.status === 400){
        setError(error.response.data.message);
      }
      else{
        setError("Ooooops, Something went wrong!")
      }
      console.log('error >>>', error);
    })

    //alert("username: " + username + " password: " + password);
  }


  return (
    <div>
      Login<br /><br />
      <div>
        Username<br />
        <input 
          type="text"
          value={username}
          onChange={e => setUsername(e.target.value)} 
        />
      </div>
      <div style={{ marginTop: 10 }}>
        Password<br />
        <input type="password"  
        value={password}
        onChange={e => setPassowrd(e.target.value)} 
        />
      </div>
      {error && <><small style={{ color: 'red' }}>{error}</small><br /></>}<br />
      <input type="button" value={loading ? "Loading..." : "login"}
      disabled={loading} 
      onClick={handleLogin}/><br />

      <img src= {logo} alt="Logo" />;
    </div>
  );
}

