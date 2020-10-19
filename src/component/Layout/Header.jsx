import React, {Component} from "react";
import { Link } from "react-router-dom";
import {
    Container,
    Row,
    Col,
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavbarText
} from "reactstrap";

class Header extends Component{
    render() {
        return(
            <header className="master-header"> 
                <Navbar dark expand="md">
                    <Collapse navbar>
                        <Nav className="mr-auto" navbar>
                            <NavItem>
                                <Link className="nav-link" to="/">خانه</Link>
                            </NavItem>
                            <NavItem>
                                <Link className="nav-link" to="/">درباره ما</Link>
                            </NavItem>
                            <NavItem>
                                <Link className="nav-link" to="/search">آگهی های شغلی</Link>
                            </NavItem>
                            <NavItem>
                                <Link className="nav-link" to="/">ورود/ ثبت نام</Link>
                            </NavItem>
                        </Nav>
                    </Collapse>
                    <NavbarBrand href="/">
                        <Link to="/">
                            <img src="/assets/logo_topmenu.png" className="logo-header" alt="Logo"/ >
                        </Link>
                    </NavbarBrand>
                </Navbar>
            </header>
        )
    }
}
export default Header;