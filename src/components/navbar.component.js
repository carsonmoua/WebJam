import React, { Component } from 'react';
import { Link } from "react-router-dom";

export default class Navbar extends Component {

    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <Link to="/" className="navbar-brand">WebJam Project</Link>
                <div className="collpase navbar-collapse">
                <ul className="navbar-nav mr-auto">
                    <li className="navbar-item">
                    <Link to="/" className="nav-link">WebJam</Link>
                    </li>
                    <li className="navbar-item">
                    <Link to="/create" className="nav-link">Create Webjam</Link>
                    </li>
                    <li className="navbar-item">
                    <Link to="/user" className="nav-link">Create Users</Link>
                    </li>
                </ul>
                </div>
            </nav>
        );
    }
}