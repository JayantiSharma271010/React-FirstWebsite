import React from 'react'

const Navbar = () => {
  return (
    <div><nav class="navbar navbar-expand-lg navbar-light bg-light navbar-bg">
    <div class="container">
      <a class="navbar-brand" href="#">MyProject</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Services</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">About</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Contact</a>
          </li>
       
        </ul>
        <form class="d-flex ">
          <button class="btn btn-style " type="submit">Sign Up</button>
          <button class="btn  btn-style " type="submit">Login</button>
        </form>
      </div>
    </div>
  </nav></div>
  )
}

export default Navbar

