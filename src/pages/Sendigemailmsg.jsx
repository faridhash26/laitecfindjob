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


class Sendingemailmsg extends Component{
    constructor(props){
        super(props);
        this.state={
            
        }
    }
    
    render(){
        
        return(
            <Container className="recovermsg-p">
                <Form className="pic-part">
                    <Row>
                        <Col sm="6" >
                            <img src="/assets/Ok-amico.png" className="imgbackground" alt="background-img"/>
                        </Col>
                        <Col sm="6" className="form-part text-center">
                            <FormText>
                                <p>لینک بازیابی رمز عبور با موفقیت به ایمیل شما ارسال گردید</p>
                            </FormText>
                            <FormGroup>
                                <Link to="/">
                                    <Button color="primary" className="sendtoemail">
                                    بازگشت به صفحه اصلی
                                    </Button>
                                </Link>
                            </FormGroup>
                            <FormGroup>
                                <Link to="/login">
                                    <Button color="primary" className="sendtoemail">
                                        ورود به حساب کاربری
                                    </Button>
                                </Link>
                            </FormGroup>
                        </Col>
                    </Row>
                </Form>
            </Container>
        )
    }

}

export default Sendingemailmsg;