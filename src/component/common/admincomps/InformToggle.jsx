import React, { useState } from 'react';
import {
    Container,
    Card,
    CardHeader,
    ButtonDropdown,
    DropdownToggle,
    DropdownMenu, 
    DropdownItem,
    Dropdown,
    Button,
    Modal, 
    ModalHeader, 
    ModalBody, 
    ModalFooter,
    Row,
    Col,
    Collapse,
    CardBody,
    InputGroup, 
    InputGroupAddon, 
    Input,
    InputGroupText,

}from "reactstrap";


import Listeddroped from './LIstdroped';

const InformToggle=()=>{
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);
    return(
        <Row >
        <Col sm="10">
            <Container>
                <div class="accordion" id="accordionExample">
                    <Card>
                        <CardHeader >
                            <Row className="pt-3">
                                <Col sm="1">
                                    <Button color="primary" id="toggler" onClick={toggle} >
                                        Toggle
                                    </Button>
                                </Col>
                                <Col>
                                    <InputGroup size="sm">
                                        <InputGroupAddon addonType="prepend">
                                            <InputGroupText>
                                                <Button>change</Button>
                                                <p>فرید هاشمیان</p>
                                            </InputGroupText>
                                        </InputGroupAddon>
                                        
                                    </InputGroup>
                                </Col>
                                <Col>
                                    <div>
                                        <InputGroup size="sm" className="mb-3">
                                            <InputGroupAddon addonType="prepend">
                                                <InputGroupText>
                                                    <Button>add</Button>
                                                </InputGroupText>
                                            </InputGroupAddon>
                                            <Listeddroped />
                                        </InputGroup>
                                    </div>
                                </Col>
                                <Col>
                                    <InputGroup size="sm" className="mb-3">
                                        <Listeddroped />
                                    </InputGroup>
                                </Col>
                                <Col>
                                    <div>
                                        <InputGroup size="sm" className="mb-3">
                                            <InputGroupAddon addonType="prepend">
                                                <InputGroupText>
                                                    <Button>add</Button>
                                                </InputGroupText>
                                            </InputGroupAddon>
                                            <Listeddroped />
                                        </InputGroup>
                                    </div>
                                </Col>
                            </Row>
                        </CardHeader>
                        <Collapse isOpen={isOpen}>
                            <Card>
                                <CardBody>
                                    Anim pariatur cliche reprehenderit,
                                    enim eiusmod high life accusamus terry richardson ad squid. Nihil
                                    anim keffiyeh helvetica, craft beer labore wes anderson cred
                                    nesciunt sapiente ea proident.
                        </CardBody>
                            </Card>
                        </Collapse>
                    </Card>
                </div>
            </Container>
        </Col>
        <Col sm="2"/>
    </Row>
    )
}
export default InformToggle;