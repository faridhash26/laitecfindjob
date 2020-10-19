import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
    Col,
    Row,
    Nav,
    NavItem,
    NavLink,
    Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,



  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from "reactstrap";



class HeaderAdmin extends Component {
    render() {
        return (
            <header>
                <Row>
                    <Col className="header-nav" sm="10">
                        <div>
                            <Nav>
                                <NavItem>
                                    <NavLink href="#">
                                        <Link class="btn btn-danger" to="/">خروج</Link>
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="#">
                                        <Link class="btn btn-danger" to="/">مشاهده سایت</Link>
                                    </NavLink>
                                </NavItem>
                            </Nav>
                        </div>
                    </Col>
                    <Col sm="2">
                        <div className="side-nav">
                            <Nav vertical>
                            <Link className="navbar-brand" to='/'>
                                <img className="logo" alt="logo" src="/assets/logo_indexmain.png"></img>
                            </Link>
                                <NavItem>
                                    <NavLink className="active" href="#">کاربران</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="#">آگهی های شغلی</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="#">تنظیمات صفحه</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="#">خروجی</NavLink>
                                </NavItem>
                            </Nav>
                        </div>
                    </Col>
                </Row>
            </header>
        )
    }
}
export default HeaderAdmin;