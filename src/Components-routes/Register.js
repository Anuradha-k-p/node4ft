import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Register = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')


  const handleregister = () => {
    try {
      const response = axios.post('https://node4-f4bv.onrender.com/pages/register', { email, password })
        .then((res) => {
          console.log(res.data, "User Registered Data")
          if (res.data.msg === "email Already exist") {
            alert(res.data.msg)
            navigate('/login')
          }
          else {
            localStorage.setItem("token", res.data.token)
          }
        })
      console.log((response.data, "response Data"));
    }
    catch (error) {
      console.error(error, "Registration failed")
    }
  }


  return (
    <div className='nav'>

      <label>Email :</label>
      <input type='email' value={email} onChange={(e) => setEmail(e.target.value)} />
      <br />
      <label>Password:</label>
      <input type='password' value={password} onChange={(e) => setPassword(e.target.value)} />
      <br /><br />
      <button onClick={handleregister}>Register Your Account</button>
    </div>
  )

}
export default Register