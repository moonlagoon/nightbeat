import React from 'react'
import { Redirect } from 'react-router-dom'
import API from '../../../util/API'
import { AuthenticationContext } from '../../../context/authenticationContext'
import './Login.css'

const Login = props => {

  let { authenticated, userInfo, login } = React.useContext(AuthenticationContext)
  let [redirectTo, setRedirectTo] = React.useState()
  let [loginForm, setLoginForm] = React.useState({
    username: '',
    password: ''
  })
  const { username, password } = loginForm

  const handleInput = event => {
    setLoginForm({
      ...loginForm, [event.target.name]: event.target.value
    })

  }

  const handleLogin = (event) => {
    event.preventDefault()
    API.login(username, password)
      .then(userInfo => {
        setRedirectTo('/')
        login(userInfo.data.username)
        sessionStorage.setItem('authenticatedUser', true)
        sessionStorage.setItem('userInfo', userInfo.data.username)

      })
      .catch(err => console.log(err))
  }



  return (
    redirectTo ?
      <Redirect to={{ exactpathname: redirectTo }} />
      :
      <div className="container-login">

        <form onSubmit={handleLogin}>
          <div className="user">
            <div className='form-group'>
              <label className='text-white' htmlFor='username'>
                Username
          </label>
              <input
                type='text'
                className='form-control'
                name='username'
                value={username}
                onChange={handleInput}
                placeholder='Enter username'
              />
            </div>
          </div>

          <div className="pass">
            <div className='form-group'>
              <label className='text-white' htmlFor='password'>
                Password</label>
              <input
                type='password'
                className='form-control'
                name='password'
                value={password}
                onChange={handleInput}
                placeholder='Enter password'
              />
            </div>
          </div>

          <button type='submit' className='btn btn-primary'>
            Submit
        </button>
        </form>
      </div>
  )
}
export default Login;