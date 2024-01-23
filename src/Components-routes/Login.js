import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'



const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navi = useNavigate()

  const handleLogin = () => {

    try {

      const response = axios.post('https://node4-f4bv.onrender.com/pages/login', { email, password })
        .then((res) => {
          console.log(res.data, "User Login Data")
          if (res.data.msg === "Login successful!!") {
            console.log("login success")
            navi('/dashboard')
            localStorage.setItem("token", res.data.token)
          }
          if (res.data.msg === "Oppss...😿😿 try again...") {
            alert("you Haven't Registered Yet")
            navi('/register')
          }
        })
      console.log(response.data, "Response Data")
    } catch (error) {
      console.log(error, "Error in Login");
    }
  }


  return (
    <div className='nav'>
      <label>Email: </label><br />
      <input type='text' value={email} onChange={(e) => setEmail(e.target.value)} required id="myInput" /><br />

      <label>Password: </label><br />
      <input type='password' value={password} onChange={(e) => setPassword(e.target.value)} required />
      <br />
      <br />
      <button onClick={handleLogin}>LogIn</button>

    </div>
  )
}

export default Login