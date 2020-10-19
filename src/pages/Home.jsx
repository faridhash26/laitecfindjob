import React, { Component } from 'react';
import { 
    Row,
    Col,
    InputGroup,
    InputGroupAddon,
    InputGroupText,
    Button,
    Form,
    FormGroup,
    Label, 
    Input,
    FormText,
    Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Container
 } from 'reactstrap';
import Comp from '../component/common/homepagecomps/Comp';
import InforComponent from '../component/common/homepagecomps/InfoComponent';
import PersonComponent from '../component/common/homepagecomps/PersonComponent';

 
import SliderComp from '../component/common/SliderComp';


class Home extends Component{
    render(){
        return(
            <>
                <Row className="masterhead">
                    <Col sm="6">
                        <Row>
                            <Col>
                                <img alt="logo" className="searchjob" src="/assets/searchjob.png"/>
                            </Col>
                            <Col className="headertext">
                                <h2>مطمئن ترین سامانه کار یابی در حوزه برنامه نویسی</h2>
                            </Col>
                        </Row>
                        
                    </Col>
                    <Col sm="6">
                        <Row>
                            <Col>
                                <img alt="logo" className="findjob" src="/assets/findjob.png"/>
                            </Col>
                            <Col>
                                <InputGroup className="search">
                                    <Input  placeholder=" جستجو در مشاغل" />
                                        <InputGroupAddon addonType="prepend">
                                        <Button >
                                        <i class="fas fa-search"/>
                                        </Button>
                                        </InputGroupAddon>
                                            
                                </InputGroup>
                            </Col>
                        </Row>
                        
                    </Col>
                </Row>
                <Row className="section-slider">
                    <Col>
                        <SliderComp/>
                    </Col>
                </Row>
                <Row className="section-comp">
                    <Comp/>
                </Row>
                <Row className="section-person">
                    <PersonComponent/>
                </Row>
                <Container className="section-information">
                    <InforComponent/>
                </Container>
            </>
        )
    }
}

export default Home;