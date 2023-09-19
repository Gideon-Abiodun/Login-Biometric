import React from 'react'

const LoginBiometric = () => {
  return (
      <div className='container'>
          <form action="">
              <h1>Login with your <br />fingerprint</h1>
              <div className="fingerprint">
                  <i class="fas fa-fingerprint"></i>
                  <button className='btn-touch'>Turn on Touch ID</button>
                  <button className='btn-email'><i class="bi bi-envelope"></i>Continue with email</button>
              </div>
          </form>
    </div>
  )
}

export default LoginBiometric