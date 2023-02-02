import React, {useRef, useState} from 'react'
import { Form, Button, Card, Alert } from 'react-bootstrap'
import logo from '../images/logo.png'
import { useAuth } from './../context/Authcontext';
import { Link, useNavigate } from 'react-router-dom';





export default function Login() {


    const emailRef = useRef()
    const passwordRef = useRef()
    const { login } = useAuth()
    const [error, setError] = useState()
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()


    async function handleSubmit(e) {  
        e.preventDefault()

        try {
            setError('')
            setLoading(true)
            await login(emailRef.current.value, passwordRef.current.value)
           navigate('/')
        } catch {   
            setError('Failed to Log In !!!!!!')
        }

        setLoading(false)
    }

  return (
    <>
          < Card>
              <Card.Body>   
                  <img src={logo} alt="Logo"/>
                  <h2 className='text-center mb-4 '>Log In</h2>
                  
                  {error && <Alert variant='danger'>{ error }</Alert>}
                  <Form onSubmit={handleSubmit}>    
                      {/* Email */}
                      <Form.Group id='email'>   
                          <Form.Label> Email </Form.Label>
                          <Form.Control type='email' ref={emailRef} required />
                      </Form.Group>
                      
                      {/* Password */}
                      <Form.Group id='password'>   
                          <Form.Label> Password </Form.Label>
                          <Form.Control type='password' ref={passwordRef} required />
                      </Form.Group>

                      {/* Button */}
                      <Button disabled={loading} className='w-100 mt-4 bg-warning b-danger' type='submit'> Log In</Button>
                  </Form>
              </Card.Body>
          </Card>

          <div className='w-100 text-center mt-2'> 
              Create an account ? < Link to= '/signup'>Signup</Link>
          </div>
    </>
  )
}


















