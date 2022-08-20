import React from 'react';
import {greetings, socialLinks} from "../portfolio";
import "../styles/argon-design-system-react.css"
import "../styles/styles.css"

import {NavbarBrand, Navbar, Nav, NavLink, NavItem, Container} from "reactstrap";

const Header = () => {
    return (
        <>
            <header className="header-global">
                <Navbar
                    className="navbar-main navbar-transparent navbar-light"
                    expand="lg"
                    id="navbar-main"
                >
                    <Container>
                        <NavbarBrand href="/" className="mr-lg-5">
                            <h2 className="text-white" id="nav-title">
                                {greetings.name}
                            </h2>
                        </NavbarBrand>
                    </Container>
                </Navbar>
            </header>
        </>
    );
};

export default Header;