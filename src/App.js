import './App.css';
import{BrowserRouter, NavLink} from 'react-router-dom'
import {Routes,Route} from 'react-router-dom'
import Home from './Components-routes/Home';
import Login from './Components-routes/Login';
import Register from './Components-routes/Register';
import Dashboard from './Components-routes/Dashboard';

function App() {
  const nav={
   textDecoration:"none",
   color:"black"
   }
  return (
    <>
    <div className="App">
<BrowserRouter>
<div className='Navbar'>

 <NavLink to='/' style={nav}>Home</NavLink>
<NavLink to='/register' style={nav}>Register</NavLink>
<NavLink to='/login' style={nav}>Login</NavLink>
<NavLink to='/dashboard' style={nav}>Dashboard</NavLink>
</div>
<div className='body'>
    
    <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
    </Routes>
    </div>
</BrowserRouter>

    </div>
    
    </>
  );
}

export default App;
