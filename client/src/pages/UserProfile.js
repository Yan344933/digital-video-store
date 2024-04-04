import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import userContext from '../context/userContext';

const UserProfile = () => {

    const [user, setUser] = useState({});
    const navigate = useNavigate();

    const { username } = useContext(userContext);

    useEffect(() => {
        console.log(`from Profile username=${username}`)
        if (!username) {
            navigate('/');
        } else {

            //get user
            fetch(`http://localhost:5000/user?username=${username}`)
                .then((res) => res.json())
                .then(data => {
                    setUser(data.body[0]);
                    console.log(data);
                })
        }
    }, [])

    return (
        <div className='px-5 align-items-start'>
            <div className='row justify-content-center'>
                <div className='row align-items-center'>
                    <h1 className='text-start my-3 col-12 col-md-4'>
                        My Profile
                    </h1>
                </div>
                <form className='text-start p-3 container col-12 col-sm-6'>
                    <div className='row my-3 px-1'>
                        <div className='col-12 col-sm-6'>
                            <label>First Name:</label>
                            <input type="text" className='form-control'
                                disabled
                                value={user.firstName} />
                        </div>
                        <div className='col-12 col-sm-6'>
                            <label>Last Name:</label>
                            <input type="text" className='form-control'
                                disabled
                                value={user.lastName} />
                        </div>
                    </div>
                    <div className='row my-3 px-3'>
                        <label>Email:</label>
                        <input type="text" className='form-control'
                            disabled
                            value={user.email} />
                    </div>
                    <div className='row my-3 px-3'>
                        <label>Username:</label>
                        <input type="text" className='form-control'
                            disabled
                            value={user.username} />
                    </div>
                    <div className='row my-3 px-3'>
                        <label>Password:</label>
                        <input type="password" className='form-control'
                            disabled
                            value={user.password} />
                    </div>
                </form>
            </div>
        </div>
    )
}

export default UserProfile