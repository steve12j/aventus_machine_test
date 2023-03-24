import React from 'react';
import {Link, NavLink} from "react-router-dom";

export default function Header() {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                <Link to="/" className="navbar-brand" >Avatar</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink to="/register" className="nav-link" >Add User</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}