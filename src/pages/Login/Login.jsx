import React, { useEffect, useState } from 'react'
import "./Login.css"
import {Link, useNavigate} from 'react-router-dom';
import topLeft from "../../images/topLeft.png"
import topRight from "../../images/topRight.png"
import bottomLeft from "../../images/bottomLeft.png"
import bottomRight from "../../images/bottomRight.png"
import axios from 'axios';

const Login = () => {
    
    const [username,setUsername]=useState("")
    const [password,setPassword]=useState("")
    const [data, setData] = useState([]);
    const navigate=useNavigate();

    const handleInputChangeUsername = (e) => {
    setUsername(e.target.value);
  };
    const handleInputChangePassword = (e) => {
    setPassword(e.target.value);
  };

    const handleSubmit =async(e) => {
            e.preventDefault();
            const body=
        {
            "username":`${username}`,
            "password":`${password}`
        }
        
        try {
            const response = await fetch('http://127.0.0.1:8000/user/login/', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify(body),
            });
            if (response.ok) {
                setData(response);
                console.log("RESPONSE: ",response);
            //   navigate("/")
              console.log("DATAAAAAA GEL ARTIIKK DATAAAA: ",data);
              localStorage.setItem("userName",username)
            //   localStorage.setItem("token",`${data.token}`)
            //   window.location.reload();
            } else {
              console.error('Sign in failed');
            }
          } catch (error) {
            console.error('An error occurred:', error);
          }
        
        };
    
        
  return (
    <div>
        <div className='corner'>
            <img src={topLeft} alt="" className='topStyle'/>
            <img src={topRight} alt="" className='topStyle'/>
        </div>
        
        <div className='main'>
        <div className="login wrap">
            <h1>LOGIN</h1>
            <form onSubmit={handleSubmit}>
                <input className='input'
                    placeholder="Username"
                    autoComplete='username'
                    id="username"
                    name="username"
                    type="text"
                    value={username}
                    onChange={handleInputChangeUsername}
                />
                <input className='input' placeholder="Password" id="password" name="password" type="password" value={password} autoComplete="current-password" onChange={handleInputChangePassword}/>
                <input value={"Submit"} className="btn" type="submit" />
            </form>
                
                <p>Dont you have an account? <Link to="/register">Sign Up</Link></p>
                
        </div>
</div>
<div className='corner'>
            <img src={bottomLeft} alt="" className='bottomStyle'/>
            <img src={bottomRight} alt="" className='bottomStyle'/>
        </div>
    </div>
  )
  }

export default Login