import React, { useContext, useState } from 'react'
import sendRequest from '../helpers/SendRequest';
import { useNavigate } from 'react-router-dom';
import userContext from '../context/userContext';

const RegisterModal = () => {

  const [username, setLocalUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');

  const navigate = useNavigate();
  const {setIsLoggedIn, setUsername} = useContext(userContext);

  const validateForm = () => {
    let validation = { validate: true, msg: '' };

    if (username === '' || password === '' || confirmPassword === '' ||
      firstName === '' || lastName === '' || email === '') {
      validation.validate = false
      validation.msg = 'Missing information!'
    }

    if (password !== confirmPassword) {
      validation.validate = false
      validation.msg = 'Password not match!'
    }


    return validation;
  }

  const signup = () => {

    const validation = validateForm()

    if (validation.validate) {
      sendRequest('http://localhost:5000/users', 'POST', {
        firstName: firstName,
        lastName: lastName,
        email: email,
        username: username,
        password: password,
        role: "user"
      }).then(()=>{
        document.getElementById("closeRegister").click();
        setIsLoggedIn(true);
        setUsername(username);
        navigate("/user");
      }, 
      //reject
      (msg) => alert(msg))

    } else {
      alert(validation.msg);
    }
  }

  return (
    <div className="modal fade" id="RegisterModal" tabIndex="-1" aria-labelledby="RegisterModalLabel" aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content bg-secondary">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="RegisterModalLabel">Register</h1>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" id="closeRegister"></button>
          </div>
          <div className="modal-body">
            <form id="RegisterForm" className='text-start'>
              <div className='container'>
                <div className='row mb-3'>
                  <label htmlFor='register-firstname'>Firstname:</label>
                  <input type="text" id="register-firstname" className='form-control' value={firstName}
                    required
                    onChange={(e) => setFirstName(e.target.value)} />
                </div>
                <div className='row mb-3'>
                  <label htmlFor='register-lastname'>Lastname:</label>
                  <input type="text" id="register-lastname" className='form-control' value={lastName}
                    required
                    onChange={(e) => setLastName(e.target.value)} />
                </div>
                <div className='row mb-3'>
                  <label htmlFor='register-email'>Email:</label>
                  <input type="text" id="register-email" className='form-control' value={email}
                    required
                    onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className='row mb-3'>
                  <label htmlFor='register-username'>Username:</label>
                  <input type="text" id="register-username" className='form-control' value={username}
                    required
                    onChange={(e) => setLocalUsername(e.target.value)} />
                </div>
                <div className='row mb-3'>
                  <label htmlFor='register-password'>Password:</label>
                  <input type="password" id="register-password" className='form-control' value={password}
                    required
                    onChange={(e) => setPassword(e.target.value)} />
                </div>
                <div className='row mb-3'>
                  <label htmlFor='register-password2'>Confirm Password:</label>
                  <input type="password" id="register-password2" className='form-control' value={confirmPassword}
                    required
                    onChange={(e) => setConfirmPassword(e.target.value)} />
                </div>
                <div className='row mt-5'>
                  <button type="button" className="btn btn-warning" onClick={e => signup()}>Sign up</button>
                </div>
              </div>
            </form>
          </div>

        </div>
      </div>
    </div>
  )
}

export default RegisterModal