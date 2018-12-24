/**
 * Created by Abraham Bello on 11/10/2018.
 */
import React, { Component } from 'react';
import { Navbar, NavbarBrand, Fa, NavbarNav, NavbarToggler, Collapse, NavItem, NavLink } from 'mdbreact';

class NavbarFeatures extends Component {
    constructor(props){
        super(props);
        this.state = {
            collapse: false,
            isWideEnough: false,
        };
        this.onClick = this.onClick.bind(this);
    }
    onClick(){
        this.setState({
            collapse: !this.state.collapse,
        });
    }
    render() {
         return (
                <Navbar color="indigo" dark expand="md" scrolling>
                    <NavbarBrand to="/">
                        <strong></strong>
                    </NavbarBrand>
                    <NavbarNav left>
                        <NavLink to="/">
                            <Fa icon="bank" size="lg" className="text-white" />
                        </NavLink>
                    </NavbarNav>
                    { !this.state.isWideEnough && <NavbarToggler onClick = { this.onClick } />}
                    <Collapse isOpen = { this.state.collapse } navbar>
                        <NavbarNav right className="justify-content-center md-pills pills-secondary">
                            <NavItem active>
                                <NavLink to="/">HOME</NavLink>
                            </NavItem>
                              <NavItem>
                                  <NavLink to="/about">ABOUT US</NavLink>
                              </NavItem>
                              <NavItem>
                                  <NavLink to="/gallery">GALLERY</NavLink>
                              </NavItem>
                              <NavItem>
                                  <NavLink to="/news">NEWS</NavLink>
                              </NavItem>
                              <NavItem>
                                  <NavLink to="/enrol">ADMISSIONS</NavLink>
                              </NavItem>
                              <NavItem>
                                  <NavLink to="/contact" className="btn-warning">CONTACT</NavLink>
                              </NavItem>
                        </NavbarNav>
                    </Collapse>
                </Navbar>
        );
    }
}

export default NavbarFeatures;