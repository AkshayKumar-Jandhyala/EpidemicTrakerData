import React, {Component} from 'react';



import {NavLink} from 'react-router-dom';

import {Navbar, Nav} from 'react-bootstrap';

export class Navigation extends  Component{
    render(){
        return(
            <Navbar bg="dark" variant="dark" exapnd="lg">
                
                <Navbar.Brand href="#home">
                <img
                    alt=""
                    src="/images/logo2.png"
                    width="40"
                    height="40"
                    className="d-inline-block align-center"
                />{' '}
                Epidemic Tracker
                </Navbar.Brand>



                <Navbar.Toggle aria-controls="basix-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav >

                <NavLink className="d-line p-2 bg-dark text-white"
                to="/">Home</NavLink>

                <NavLink className="d-line p-2 bg-dark text-white"
                to="/patient">Patient</NavLink>

                <NavLink className="d-line p-2 bg-dark text-white"
                to="/case">Cases</NavLink>


                </Nav>
                </Navbar.Collapse>  
            </Navbar>
        )
    }
}
