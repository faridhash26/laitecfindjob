import React from 'react';


import {
    Row,
    Col,
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
  } from 'reactstrap';

const PersonComponent =()=>{
    return(
        <div>
            <h3>کارآموزان برتر</h3>
            <Row>

                <Col sm="3">
                    <Card>
                        <CardImg top width="100%" src="/assets/person.png" alt="Card image cap" />
                        <CardBody>
                            <CardTitle>Card title</CardTitle>
                            <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                        </CardBody>
                    </Card>
                </Col>
                <Col sm="3">
                    <Card>
                        <CardImg top width="100%" src="/assets/person.png" alt="Card image cap" />
                        <CardBody>
                            <CardTitle>Card title</CardTitle>
                            <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                        </CardBody>
                    </Card>
                </Col>
                <Col sm="3">
                    <Card>
                        <CardImg top width="100%" src="/assets/person.png" alt="Card image cap" />
                        <CardBody>
                            <CardTitle>Card title</CardTitle>
                            <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                        </CardBody>
                    </Card>
                </Col>
                <Col sm="3">
                    <Card>
                        <CardImg top width="100%" src="/assets/person.png" alt="Card image cap" />
                        <CardBody>
                            <CardTitle>Card title</CardTitle>
                            <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </div>
        
    )
}
export default PersonComponent;