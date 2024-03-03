import React from 'react'

const LoginModal = () => {
  return (
    <div class="modal fade" id="LoginModal" tabindex="-1" aria-labelledby="LoginModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content bg-secondary">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="LoginModalLabel">Log in</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <form id="LoginForm" className='text-start'>
            <div className='container'>
              <div className='row mb-3'>
                <label htmlFor='username'>Username:</label>
                <input type="text" id="username" className='form-control' />
              </div>
              <div className='row mb-3'>
                <label htmlFor='user-password'>Password:</label>
                <input type="password" id="user-password" className='form-control' />
              </div>
              <div className='row mb-5'>
                <a href='#' className='text-light'>Forget Password?</a>
              </div>
              <div className='row'>
              <button type="button" class="btn btn-warning">Log in</button>
              </div>
            </div>
          </form>
        </div>
          
      </div>
    </div>
  </div>
  
  )
}

export default LoginModal