import React, {useRef} from 'react'
import { Form, Button, Card } from 'react-bootstrap'
import logo from '../images/logo.png'



export default function Signup() {


    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmRef = useRef()
    

  return (
    <>
          < Card>
              <Card.Body>   
                  <img src={logo} alt="Logo"/>
                  <h2 className='text-center mb-4 '>Sign Up</h2>
                  <Form>    
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

                      {/* Password-Confirm */}
                      <Form.Group id='password-confirm'>   
                          <Form.Label> Password Confirmation </Form.Label>
                          <Form.Control type='password' ref={passwordConfirmRef} required />
                      </Form.Group>

                      {/* Button */}
                      <Button className='w-100 mt-4 bg-warning b-danger' type='submit'> Sign Up</Button>
                  </Form>
              </Card.Body>
          </Card>

          <div className='w-100 text-center mt-2'> 
              Already have an account ? Log In
          </div>
    </>
  )
}

















