import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import {
    Container,
    Button,
    Form,
    FormGroup,
    Label,
    Input, 
    FormText,
    Row,
    Col,
    UncontrolledAlert,
    Alert
} from "reactstrap";


class Login extends Component{
    constructor(props){
        super(props);
        this.state={
            
        }
    }
    
    render(){
        
        return(
            <Container className="login-p">
                <Form>
                    <Row>
                        <Col sm="6" className="pic-part">
                            <img src="/assets/formbackground.png" alt="background-img"/>
                        </Col>
                        <Col sm="6" className="form-part text-center">
                            <FormText className="mt-5">
                                <h5>صفحه ورود به حساب کاربری</h5>
                            </FormText>
                            <FormGroup className="mt-5 alerts">
                                <UncontrolledAlert color="info">
                                   رمز اشتباه است
                                </UncontrolledAlert>    
                            </FormGroup>
                            <FormGroup>
                                <Input type="email" name="email" id="email" placeholder="پست الکترونیکی"/>
                            </FormGroup>
                            <FormGroup>
                                <Input type="password" name="password" id="password1" placeholder="رمز عبور"/>
                            </FormGroup>
                            <FormGroup>
                                <Button color="primary" className="enter">
                                    ورود
                                </Button>
                            </FormGroup>
                            <FormGroup className="mt-5">
                                <Row>
                                    <Col sm="6" >
                                        <p>آیا حساب کاربردی ندارید؟</p>
                                    </Col>
                                    <Col sm="6" >
                                        <Link to="/register">
                                        ساخت حساب کاربری
                                        </Link>
                                    </Col>
                                </Row> 
                            </FormGroup><FormGroup >
                                <Row>
                                    <Col sm="6">
                                        <p>رمز عبور را فراموش کرده اید؟</p>
                                    </Col>
                                    <Col sm="6" >
                                        <Link to="/recover">
                                        بازیابی رمز عبور
                                        </Link>
                                    </Col>
                                </Row> 
                            </FormGroup>
                        </Col>
                    </Row>
                </Form>
            </Container>
        )
    }

}

export default Login;