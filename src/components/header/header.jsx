import React, { useContext } from 'react';
import {Nav, Navbar, Button, NavDropdown} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import {UserContext} from '../../contexts/userContext';
import { useHistory } from 'react-router';

import './header.scss';


const StylesNav = styled.div `
    a, .navbar-brand, .navbar-nav .nav-link  {
        color: #aaaaaa;
        text-decoration: none;
        transition: 0.1s;
        a:hover {
            color: red;
            font-weight: bold;
            text-transform: uppercase;
            transition: 0.1s;
        }
        
    }
`

export function Header() {

    const {isLoginUser} = useContext(UserContext);
    const {setIsLoginUser} = useContext(UserContext);
    
    const history = useHistory();

    const handleLogout = () => {
        setIsLoginUser(false);
        history.push('/');

    }
    
    return (
        <>
            <StylesNav>
                <Navbar fluid collapseOnSelect fixed="top" expand="lg" bg="dark" variant="dark" className="mb-2">

                    <Navbar.Brand>favourite movie</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link>
                                <Link to="/">
                                    by popularity
                                </Link>
                            </Nav.Link>
                            <Nav.Link>
                                <Link to="/byRating">
                                    by rating
                                </Link>
                            </Nav.Link>
                            <NavDropdown title="by year" id="collasible-nav-dropdown">
                                <NavDropdown.Item>
                                    <Link to='/byYear/2021'>
                                        2021
                                    </Link>
                                </NavDropdown.Item>
                                <NavDropdown.Item>
                                    <Link to='/byYear/2020'>
                                        2020
                                    </Link>
                                </NavDropdown.Item>
                                <NavDropdown.Item>
                                <Link to='/byYear/2019'>
                                        2019
                                    </Link>
                                </NavDropdown.Item>
                                <NavDropdown.Item>
                                <Link to='/byYear/2018'>
                                        2018
                                    </Link>
                                </NavDropdown.Item>
                                <NavDropdown.Item>
                                <Link to='/byYear/2017'>
                                        2017
                                    </Link>
                                </NavDropdown.Item>
                            </NavDropdown>
                            {
                                isLoginUser? (
                                <Nav.Link>
                                    <Link to="/viewLater">
                                        view later
                                    </Link>
                                </Nav.Link>
                                ) : ('')
                            }
                        </Nav>
                        <Nav>
                           {
                               isLoginUser? (
                            <Button onClick={handleLogout} variant="danger" className="m-1">
                                <Link to="/">
                                    log out
                                </Link>
                            </Button>
                              ) : (
                                  <>
                            <Button variant="danger" className="m-1">
                                <Link to="/login">
                                    log in
                                </Link>
                            </Button>
                            <Button variant="danger" className="m-1">
                                <Link to="/registration">
                                    registration
                                </Link>
                            </Button>
                          </>
                              )
                        } 
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </StylesNav>
        </>

    )
}
