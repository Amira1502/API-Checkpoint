import React from 'react'
//CSS
import { Navbar, Nav} from "react-bootstrap";
import './Navbar.css'

//navlink
import { NavLink } from 'react-router-dom'


const navbar = () => {
    return (
        <div>
  <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Navbar.Brand href="#home">Checkpoint API</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
    <NavLink exact to='/' className='app-link' activeClassName="active-link" >Home</NavLink>
    <NavLink to='/users' activeClassName="active-link" className='app-link'>Users</NavLink>
    </Nav>
  </Navbar.Collapse>
</Navbar>
        </div>
    )
}

export default navbar
