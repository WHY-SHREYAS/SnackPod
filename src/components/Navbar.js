import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function Navbar() {

  const navigate = useNavigate

  const handleLogOut = () =>{
      localStorage.removeItem("authToken")
      navigate("/login")
  }

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-info">
        <div className="container-fluid">
          <Link className="navbar-brand fs-1 fw-bold" to="#">SnackPod</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav me-auto">
              <li className="nav-item">
                <Link className="nav-link active fs-4" aria-current="page" to="#">Home</Link>
              </li>


              {(localStorage.getItem("authToken")) ?
              <li className="nav-item">
                <Link className="nav-link active fs-5" aria-current="page" to="#">My Orders</Link>
              </li>
                : ""}


            </ul>

            {(!localStorage.getItem("authToken")) ?
            <div className="d-flex">
              <Link className="btn bg-white text-black mx-2" to="/login">Login</Link>
              <Link className="btn bg-white text-black mx-2" to="/createuser">SignUp</Link>
            </div>
            : 
           <div> 
            <div className = "btn bg-white text-black mx-2">My Cart</div>
            
            <div className = "btn bg-white text-danger mx-2" onClick = {handleLogOut}>Log Out</div>
            </div>
            }
          </div>
        </div>
      </nav>
    </div>
  )
}
