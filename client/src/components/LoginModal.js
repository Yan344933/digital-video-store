import React, { useContext, useState } from 'react'
import sendRequest from '../helpers/SendRequest';
import { useNavigate } from 'react-router-dom';
import userContext from '../context/userContext';

const LoginModal = () => {

  const [username, setLocalUsername] = useState('');
  const [pwd, setPwd] = useState('');

  const {setIsLoggedIn, setUsername} = useContext(userContext);

  const navigate = useNavigate();

  const clearData = () => {
    setLocalUsername('');
    setPwd('');
  }

  const login = () => {
    sendRequest('http://localhost:5000/auth', 'POST', {
      username: username,
      password: pwd
    }).then(() => {
      //redirect
      document.getElementById('close').click();
      setUsername(username);
      navigate("/user");
      setIsLoggedIn(true);
    }, (msg) => {
      alert(msg)
    }
    )
  }

  return (
    <div className="modal fade" id="LoginModal" tabIndex="-1" aria-labelledby="LoginModalLabel" aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content bg-secondary">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="LoginModalLabel">Log in</h1>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" id='close'></button>
          </div>
          <div className="modal-body">
            <form id="LoginForm" className='text-start'>
              <div className='container'>
                <div className='row mb-3'>
                  <label htmlFor='username'>Username:</label>
                  <input type="text" id="username" className='form-control'
                    value={username}
                    onChange={e => setLocalUsername(e.target.value)} />
                </div>
                <div className='row mb-3'>
                  <label htmlFor='user-password'>Password:</label>
                  <input type="password" id="user-password" className='form-control'
                    value={pwd}
                    onChange={e => setPwd(e.target.value)} />
                </div>
                <div className='row'>
                  <button type="button" className="btn btn-warning" onClick={e => login()}>Log in</button>
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