import React from 'react'
import { Container } from 'react-bootstrap';
import { AuthProvider } from '../context/Authcontext';
import Signup from './Singup';
import Dashboard from './Dashboard';
import Login from './Login';
import { BrowserRouter as Router, Routes , Route } from "react-router-dom"


export default function App() {
  return (
    <div> 
      <AuthProvider>  
      < Container className='d-flex align-items-center justify-content-center' style={{minHeight: "100vh"}}>
          <div className="w-100" style={{ maxWidth: "400px" }}>
            
          <Router>
          <AuthProvider>
            <Routes>
              <Route exact path="/" element={ <Dashboard />} />
              <Route path="/signup" element={ <Signup />} />
              <Route path="/login" element={ <Login />} />
            </Routes>
          </AuthProvider>
        </Router>
       
        
        </div>
      </Container>
      </AuthProvider>
      
    </div>
    
      
  )
}






