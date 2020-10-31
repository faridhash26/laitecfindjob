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


class Skilsinfo extends Component {
    constructor(props){
        super(props);
        this.state={
            skills:["hteml" , "css" , "javascript" , "reactjs"]
        }
    }
    render(){
        return (
            <Card>
                <CardHeader>header</CardHeader>
                    <CardBody>
                        {this.state.skills.map((skill , index)=>{
                            return(
                                <CardText key={index}>
                                    {skill}
                                </CardText>
                            )
                        })}
                    </CardBody>
                <CardFooter>
                    <MODALPROFILE 
                        title="skills"
                        btntitle="تغییر اطلاعات"
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
                                                <DropdownItem header>Header</DropdownItem>
                                                <DropdownItem>Some Action</DropdownItem>
                                                <DropdownItem disabled>Action (disabled)</DropdownItem>
                                                <DropdownItem divider />
                                                <DropdownItem>Foo Action</DropdownItem>
                                                <DropdownItem>Bar Action</DropdownItem>
                                                <DropdownItem>Quo Action</DropdownItem>
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

export default Skilsinfo;
