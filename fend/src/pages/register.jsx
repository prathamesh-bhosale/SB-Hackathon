import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { register } from '../services/user'
import { toast } from 'react-toastify'

function RegisterUser() {
  // create state members
  const [name, setName] = useState('')
//   const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [phone, setPhone] = useState('')
  
  const [confirmPassword, setConfirmPassword] = useState('')

  // get a hook to navigate
  // - navigate is referring a function which is used for navigation
  const navigate = useNavigate()

  const onCancel = () => {
    navigate('/login')
  }

  const isValidEmail = () => {
    return email.includes('@')
  }

  const onRegister = async () => {
    console.log('onRegister')

    // client side validation
    if (name.length === 0) {
      toast.warning('enter name')
    }  else if (email.length === 0) {
      toast.warning('enter email')
    } else if (!isValidEmail()) {
      toast.warning('Email is not valid')
    } else if (password.length === 0) {
      toast.warning('enter password')
    } else if (confirmPassword.length === 0) {
      toast.warning('confirm password')
    } else if (password !== confirmPassword) {
      toast.warning('password does not match')
    } else {
      // make the API call and receive the result
      const result = await register(firstName, lastName, email, phone, password)
      if (result['status'] === 'success') {
        toast.success('successfully registered a user')
        navigate('/login')
      } else {
        toast.error('Failed to register the user')
      }
    }
  }

  return (
    <div>
      <h2 className='page-title'>Register</h2>

      <div className='row mt-5'>
        <div className='col-2'></div>

        <div className='col'>
          <div className='row'>
            <div className='col'>
              <div className='mb-3'>
                <label htmlFor=''>Name</label>
                <input
                  onChange={(e) => {
                    setName(e.target.value)
                  }}
                  type='text'
                  className='form-control'
                />
              </div>
            </div>

           
          </div>

          <div className='row'>
            <div className='col'>
              <div className='mb-3'>
                <label htmlFor=''>Email</label>
                <input
                  onChange={(e) => {
                    setEmail(e.target.value)
                  }}
                  type='email'
                  className='form-control'
                />
              </div>
            </div>

            <div className='col'>
              <div className='mb-3'>
                <label htmlFor=''>Phone Number</label>
                <input
                  onChange={(e) => {
                    setPhone(e.target.value)
                  }}
                  type='tel'
                  className='form-control'
                />
              </div>
            </div>
          </div>

          <div className='row'>
            <div className='col'>
              <div className='mb-3'>
                <label htmlFor=''>Password</label>
                <input
                  onChange={(e) => {
                    setPassword(e.target.value)
                  }}
                  type='password'
                  className='form-control'
                />
              </div>
            </div>

            <div className='col'>
              <div className='mb-3'>
                <label htmlFor=''>Confirm Password</label>
                <input
                  onChange={(e) => {
                    setConfirmPassword(e.target.value)
                  }}
                  type='password'
                  className='form-control'
                />
              </div>
            </div>
          </div>

          <div className='row'>
            <div className='col'>
              <div className='mb-3'>
                Already have account ? <Link to='/login'>Login here</Link>
              </div>

              <button onClick={onRegister} className='btn btn-success'>
                Register
              </button>
              <button onClick={onCancel} className='btn btn-danger ms-2'>
                Cancel
              </button>
            </div>
          </div>
        </div>

        <div className='col-2'></div>
      </div>
    </div>
  )
}

export default RegisterUser
