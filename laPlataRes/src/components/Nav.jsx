import React from 'react';
import {Link, NavLink} from 'react-router-dom';

const Nav = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
        <Link class="navbar-brand" to="/"><img src="" alt="Logo" /></Link>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
            <Link class="nav-link active" aria-current="page" href="#">Inicio</Link>
            </li>
            <li class="nav-item">
            <NavLink class="nav-link" to="#">Contacto</NavLink>
            </li>
        </ul>
        </div>
    </div>
    </nav>
  );
}

export default Nav;