import React from 'react';


import { 
    Row,
    Col,
    Button,
    Card,
    CardImg,
    CardText, 
    CardBody,
    CardTitle, 
    CardSubtitle
 } from 'reactstrap';


const Comp =()=>{
    return(
        <div className="back-img">
            <Row>
                <Col sm="4">
                    <Card>
                    
                        <CardBody>
                            <CardTitle><i class="fas fa-building fa-3x"  aria-hidden="true"/></CardTitle>
                            <CardSubtitle>2500</CardSubtitle>
                            <CardText>تعداد شرکت ها</CardText>
                        </CardBody>
                    </Card>
                </Col>
                <Col sm="4">
                    <Card>
                        
                        <CardBody>
                            <CardTitle><i class="fa fa-users fa-3x" aria-hidden="true"/></CardTitle>
                            <CardSubtitle>2500</CardSubtitle>
                            <CardText>تعداد تیم ها</CardText>
                        </CardBody>
                    </Card>
                </Col>
                <Col sm="4">
                    <Card>
                        <CardBody>
                            <CardTitle><i class="fa fa-user fa-3x" aria-hidden="true"/></CardTitle>
                            <CardSubtitle>2500</CardSubtitle>
                            <CardText>تعداد شرکت کننده ها</CardText>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </div>
    )
}
export default Comp;