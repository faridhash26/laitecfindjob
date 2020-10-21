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


class Recoveremail extends Component{
    constructor(props){
        super(props);
        this.state={
            
        }
    }
    
    render(){
        
        return(
            <Container className="recover-p">
                <Form className="pic-part">
                    <Row>
                        <Col sm="6" >
                            <img src="/assets/Questions-pana .png" className="imgbackground" alt="background-img"/>
                        </Col>
                        <Col sm="6" className="form-part text-center">
                            <Label className="mt-5">
                                <h5>بازیابی رمز عبور</h5>
                            </Label>
                            <FormText>
                                <p>برای بازیابی رمز عبور لطفا ایمیل خود را وارد کنید</p>
                            </FormText>
                            <FormGroup className="mt-5 alerts">
                                <UncontrolledAlert color="info">
                                    ایمیل مورد نظر موجود نمی باشد
                                </UncontrolledAlert>    
                            </FormGroup>
                            <FormGroup>
                                <Input type="email" name="email" id="email" placeholder="پست الکترونیکی"/>
                            </FormGroup>
                            
                            <FormGroup>
                                <Button color="primary" className="sendtoemail">
                                    ارسال به ایمیل
                                </Button>
                            </FormGroup>
                        </Col>
                    </Row>
                </Form>
            </Container>
        )
    }

}

export default Recoveremail;