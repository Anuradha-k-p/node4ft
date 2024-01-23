import React from 'react'
import { Link } from 'react-router-dom'
const Home = () => {
  const handleLogout=()=>{
    localStorage.removeItem('token')
  }
  return (
    <div className='text'>
      <Link to='/logout'><h3 onClick={handleLogout}>Logout</h3></Link>
     </div>
  )
}

export default Home