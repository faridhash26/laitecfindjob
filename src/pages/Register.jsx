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


class Register extends Component{
    constructor(props){
        super(props);
        this.state={
            
        }
    }
    
    
    render(){
        
        return(
            <Container className="register-p">
                <Form>
                    <Row>
                        <Col sm="6" className="pic-part">
                            <img src="/assets/formbackground.png" alt="background-img"/>
                        </Col>
                        <Col sm="6" className="form-part text-center">
                            <FormText className="mt-5">
                                <h5>صفحه ثبت نام</h5>
                            </FormText>
                            <FormGroup className="mt-5 alerts">
                                <UncontrolledAlert color="info">
                                   رمز اشتباه است
                                </UncontrolledAlert>    
                            </FormGroup>
                            <FormGroup className="mt-5">
                                <Input type="text" name="firstname" id="firstname" placeholder="نام"/>
                            </FormGroup>
                            <FormGroup>
                                <Input type="text" name="lastname" id="lastname" placeholder="نام خانوادگی"/>
                            </FormGroup>
                            <FormGroup>
                                <Input type="email" name="email" id="email" placeholder="پست الکترونیکی"/>
                            </FormGroup>
                            <FormGroup>
                                <Input type="password" name="password" id="password1" placeholder="رمز عبور"/>
                            </FormGroup>
                            <FormGroup>
                                <Input type="password" name="passwordre" id="passwordre" placeholder="تکرار رمز عبور"/>
                            </FormGroup>
                            <FormGroup>
                                <Button color="primary">
                                    ثبت نام
                                </Button>
                            </FormGroup>
                            <FormGroup>
                                <Row>
                                    <Col sm="5" className="text-left">
                                        <p>آیا حساب کاربردی دارید؟</p>
                                    </Col>
                                    <Col sm="7" className="text-right">
                                        <Link to="/login">
                                        ورود به حساب کاربری
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

export default Register;