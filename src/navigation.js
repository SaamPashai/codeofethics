
import React, { Component } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem } from 'reactstrap';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import { NavHashLink as NavLink } from 'react-router-hash-link';

class Navigation extends Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }

    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    render() {
        return (
            <div>
                <Navbar className="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
                    <NavbarBrand href="/">
                    <i className="fa fa-users fa-2x" aria-hidden="true"></i>
                    </NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <NavLink className = "move" smooth to="/#top">
                                    Home   
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className = "move" smooth to="/#sectionOne">
                                    One
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className = "move" smooth to="/#sectionTwo">
                                    Two
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className = "move" smooth to="/#sectionThree">
                                    Activity
                                </NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        );
    }
}

export default Navigation;