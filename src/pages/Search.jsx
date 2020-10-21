import React from 'react';
import { Component } from 'react';
import { 
    Container,
    Col,
    Row,
    InputGroup,
    InputGroupAddon,
    Button,
    Input
 } from 'reactstrap';
import PaginationComponent from '../component/common/Pagination';



import JobLists from '../component/common/serchpagecomp/JobLists';
 


class Search extends Component{
    constructor(props){
        super(props);

    }



    render(){
        return(
            <Container  className="searchlist">
                <Row>
                    <Col></Col>
                    <Col className="m-5">
                    <InputGroup className="search">
                        <Input className="searchbox"  placeholder=" جستجو در مشاغل" />
                            <InputGroupAddon addonType="prepend">
                                <Button >
                                    <i class="fas fa-search"/>
                                </Button>
                            </InputGroupAddon>               
                        </InputGroup>
                    </Col>
                    <Col></Col>
                </Row>
                <Row className="jobpos m-5">
                    <Col></Col>
                    <Col></Col>
                    <Col className="text-center">
                            <p>504 موقعیت شغلی</p>
                    </Col>
                </Row>
                <Row className="jobbox">
                    <Col>
                        <JobLists/>
                    </Col>
                </Row>
                <Row className="jobbox">
                    <Col>
                        <JobLists/>
                    </Col>
                </Row>
                <Row className="jobbox">
                    <Col>
                        <JobLists/>
                    </Col>
                </Row>
                <Row className="mt-5">
                    <Col sm="5"/>
                    <Col sm="2" className="mt-5">
                        <PaginationComponent/>
                    </Col>
                    <Col sm="5"/>
                </Row>
            </Container>
        )
    }
}
export default Search;