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

class Projectinfo extends Component {
    constructor(props){
        super(props);
        this.state={
            projectsurl:["http://faridhashemrah.gigfa.com"]

        }
    }
    render(){
        return (
            <Card>
                <CardHeader>header</CardHeader>
                <Row>
                    <Col sm="6">
                        <CardBody>
                            {
                                this.state.projectsurl.map((project,index)=>{
                                    return(
                                        <CardText key={index}>
                                            {project}
                                        </CardText>
                                    )
                                })
                            }
                        </CardBody>
                    </Col>
                    <Col sm="6">
                        <CardBody>
                            
                        </CardBody>
                    </Col>
                </Row>
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

export default Projectinfo;
