import React, { Component } from "react";
import { Link } from "react-router-dom";

import { Container ,Row ,Col } from 'reactstrap';



class Footer extends Component {
    render() {
        return (
            <footer>
                <div className="header-footer">
                    <div className='footer-information'>
                        <Container>
                            <Row>
                               <Col sm="1"/>
                                <Col sm="5">
                                    <ul>
                                        <li>
                                            فرصت های شغلی
                                        </li>
                                        <li>
                                            فرصت های شغلی
                                        </li>
                                        <li>
                                            فرصت های شغلی
                                        </li>
                                        <li>
                                            فرصت های شغلی
                                        </li>
                                    </ul>
                                </Col>
                                <Col sm="3">
                                    <ul>
                                        <li>
                                            فرصت های شغلی
                                        </li>
                                        <li>
                                            فرصت های شغلی
                                        </li>
                                        <li>
                                            فرصت های شغلی
                                        </li>
                                        <li>
                                            فرصت های شغلی
                                        </li>
                                    </ul>
                                </Col>
                                <Col sm="3"/> 
                            </Row>
                            <Row>
                                <Col sm="3"/>
                                <Col sm="6">
                                <div className="line-breake"/>
                                </Col>
                                <Col sm="2"/>
                            </Row>
                            <Row>
                            <Col sm="1"/>
                                <Col sm="6">
                                    <ul>
                                        <li>
                                            فرصت های شغلی
                                        </li>
                                        <li>
                                            فرصت های شغلی
                                        </li>
                                        <li>
                                            فرصت های شغلی
                                        </li>
                                        <li>
                                            فرصت های شغلی
                                        </li>
                                    </ul>
                                </Col>
                                <Col sm="5"/> 
                            </Row>
                        </Container>
                    </div>
                    <div className="footerimage">
                        <div className="social-media">
                            <ul>
                                <li>
                                    <a  href="#instagram"> <i class="fab fa-instagram"/></a>
                                </li>
                                <li>
                                    <a href="#telegram"><i class="fab fa-telegram"/></a>
                                </li>
                                <li>
                                    <a href="#telegram"> <i class="fa fa-envelope" aria-hidden="true"/></a>
                                </li>
                            </ul>
                            <Link to='/'>
                                <img alt="logo" src="/assets/logo_indexmain.png"></img>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="footer-body text-center">
                    <Container>
                        <Row>
                            <Col xs="4"/>
                            <Col xs="4">
                                <h5 className="mt-3">
                                    تمامی حقوق این سایت متعلق به لایتک میباشد &copy;
                                </h5>
                            </Col>
                            <Col xs="4"/>
                        </Row>
                    </Container>
               
                </div>
                
            </footer>
        )
    }
}
export default Footer;