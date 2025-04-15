import React from 'react'
import './Home.css'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const navigate = useNavigate();
  const login =() =>{
    navigate('/login');
  }

  const create = () =>{
    navigate('/employee')
  }
  return (
    <>
    <div className='home-body'>
    <nav className='navbar'>
        <ul>
            <li onClick={login}>Login</li>
            <li onClick={create}>Create Employee</li>
        </ul>
    </nav>
    
    <div className='home'>
        Inventech
        <div className='desc'>
            Place where Developers are born
        </div>
    </div>
    </div>
    </>
  )
}

export default Home