import React from 'react';
import { Col, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Navigation.css';
 
const Navigation = () => {
    return (
        <Col md={12} className={'navigationContainer'}>
            <Navbar inverse collapseOnSelect>
                <Navbar.Header>
                    <Navbar.Brand>
                        <NavLink to={'/'} exact >Dashboard</NavLink>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
            </Navbar>
        </Col>
    )
}
 
export default Navigation;