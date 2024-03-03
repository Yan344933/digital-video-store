import React from 'react'
import LoginModal from './LoginModal';
import RegisterModal from './RegisterModal';
import { ReactComponent as ReactLogo } from '../logo.svg';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-dark py-3 px-5 text-white" data-bs-theme="dark">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggler" aria-controls="navbarToggler" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon text-white"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarToggler">
                        <Link className="navbar-brand" to="/">{<ReactLogo />}</Link>
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active text-white" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-white" to="/movie">Movies & TV Listing</Link>
                            </li>
                        </ul>
                        <div className="d-grid gap-2 d-md-block">
                            <button type="button" className="btn btn-outline-light me-2" data-bs-toggle="modal" data-bs-target="#LoginModal">Login</button>
                            <button type="button" className="btn btn-warning" data-bs-toggle="modal" data-bs-target="#RegisterModal">Sign-up</button>
                        </div>
                    </div>
                </div>
            </nav>
            <LoginModal />
            <RegisterModal />

        </>
    )
}

export default Header