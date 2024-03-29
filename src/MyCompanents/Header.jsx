import logo from './images/logo512.png'; 
import React from 'react'
import { Link} from "react-router-dom";

export default function Header(props) {
  return (
    <nav className="navbar text-white navbar-dark navbar-expand-sm">
    <div className="container-fluid">
    <img src={logo} className="App-logo" alt="logo" />
      <Link className="navbar-brand ms-3" to="/">{props.title}</Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse  navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto">
          <li className="nav-item">
            <Link className="nav-link" aria-current="page" to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/use">Use</Link>
          </li>
          {/* <li className="nav-item">
            <Link className="nav-link" to="/Album">Album</Link>
          </li> */}
        </ul>
        {(props.SearchBar === "True") ? //show search bar or not throw auguments
          <form className="d-flex" role="search">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
          <button className="btn btn-outline-success" type="submit">Search</button>
        </form> : " "
        }
      </div>
    </div>
  </nav>
  )
}
