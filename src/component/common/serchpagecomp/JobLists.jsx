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
    CardImg,
    CardTitle,
    CardSubtitle,
    CardText

} from 'reactstrap';


const JobLists = (props)=>{

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return(
        <div class="accordion" id="accordionExample">
            <Card >
                <CardHeader >
                    <Row className="pt-3">
                        <Col sm="1">
                            <Card className="mt-3">
                                <CardImg top width="100%" src="/assets/companies.png" alt="Card image cap" />
                            </Card>
                        </Col>
                        <Col sm="3" className="mr-5">
                           <Card className="jobinfo">
                               <CardBody className="mr-2">
                                   <CardTitle>
                                       Android Developer
                                   </CardTitle>
                                   <CardSubtitle>
                                       گیتی مارکت
                                   </CardSubtitle>
                                   <CardText>
                                   <i class="fa fa-map-marker ml-3" />
                                       تهران
                                   </CardText>
                               </CardBody>
                           </Card>
                        </Col>
                        <Col>
                            <InputGroup size="sm" className="mb-3">
                            </InputGroup>
                        </Col>
                        <Col sm="3" className="mt-4">
                            <Button color="secondary"  >
                                درخواست
                            </Button>
                        </Col>
                        <Col sm="2" className="text-right mt-4">
                            <Button color="secondary" id="toggler" onClick={toggle} >
                                جزئیات بیشتر
                            </Button>
                        </Col>
                    </Row>
                </CardHeader>
                <Collapse isOpen={isOpen}>
                    <Card>
                        <CardBody className="descriptionbox">
                        گیتی مارکت استارتاپی با هدف ارائه خدمات فروش و تعامل با مشتری و ویژه کسب و کارهای محلی و خانگی است. در گیتی مارکت قصد داریم، ضمن ایجاد بستری مناسب جهت سهولت و افزایش فروش کسب و کارهای خانگی و محلی، با ایجاد تعاملی سازنده میان مشتریان و فروشندگان، به حل چالش‌ها و دغدغه‌های مشتریان و فروشندگان نیز بپردازیم.
                        </CardBody>
                    </Card>
                </Collapse>
            </Card>
        </div>
    )
}
export default JobLists;