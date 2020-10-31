import React ,{Component} from 'react';
import { 
    Card, 
    Button, 
    CardHeader, 
    CardFooter, 
    CardBody,
    CardTitle, 
    CardText,
    Row,
    Col ,
    Dropdown, DropdownToggle, DropdownMenu, DropdownItem,
    Form, FormGroup, Input, FormText
} from 'reactstrap';
import MODALPROFILE from '../Modalforprofile';

class InFormUser extends Component {
    constructor(props){
        super(props);
        this.state={
            about:["علاقه مند به کار", "منظم","دقیق"],
            dropdownOpen:false
        }
    }
    droptoggle=()=>{
        this.setState(prev=>({
            dropdownOpen:!prev.dropdownOpen
        }))
    }

    render(){
        return (
            <Card>
                <CardHeader>header</CardHeader>
                    <CardBody>
                        {this.state.about.map((about , index)=>{
                            return(
                                <CardText key={index}>
                                    {about}
                                </CardText>
                            )
                        })}
                    </CardBody>
                <CardFooter>
                    <MODALPROFILE 
                        title="skills"
                        btntitle="ارسال اطلاعات"
                    >
                        <Form>
                            <Row>
                                <Col>
                                    <Input type="text" name="state" id="exampleState"/>
                                    <Button> اضافه کردن</Button>
                                </Col>
                                <Col>
                                    <FormGroup>
                                        <Dropdown isOpen={this.state.dropdownOpen} toggle={this.droptoggle}>
                                            <DropdownToggle caret>
                                                Dropdown
                                        </DropdownToggle>
                                            <DropdownMenu>
                                                {/* map item */}
                                                <DropdownItem>
                                                    Quo Action
                                                    <button type="button" class="close" aria-label="Close">
                                                        <span aria-hidden="true">×</span>
                                                        </button>
                                                </DropdownItem>
                                                {/* map item */}
                                            </DropdownMenu>
                                        </Dropdown>
                                    </FormGroup>
                                </Col>
                            </Row>
                        </Form>
                    </MODALPROFILE>
                </CardFooter>
            </Card>
          );
    }
};

export default InFormUser;
