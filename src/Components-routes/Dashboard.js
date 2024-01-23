import React, { useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
const Dashboard = () => {
  const navigate=useNavigate()
  
  useEffect(()=>{
  const token=localStorage.getItem('token')
  console.log(token)
  if(!token){
   navigate('/login')
       alert("You Can't access Dashboard- Please check whether Log in or Not")

}
else{

axios.get('https://node4-f4bv.onrender.com/pages/dashboard', {
  headers: {
    Authorization: `Bearer ${token}`
  }
})
  .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    console.log(error);
  });
}
},[navigate])


  return (
    <div>
<h1> WELCOME TO DASHBORAD</h1>
    </div>
  )
}

export default Dashboard