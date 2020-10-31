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
    Form, FormGroup, Label, Input,
} from 'reactstrap';
import MODALPROFILE from '../Modalforprofile';

class InFormUser extends Component {
    render(){
        return (
            <Card>
                <CardHeader>header</CardHeader>
                <Row>
                    <Col sm="6">
                        <CardBody>
                            <CardText> شماره همراه کاربر: </CardText>
                            <CardText>جنسیت : </CardText>
                            <CardText>تاریخ تولد :  </CardText>
                        </CardBody>
                    </Col>
                    <Col sm="6">
                        <CardBody>
                            <CardText>آدرس محل سکونت :  </CardText>
                        </CardBody>
                    </Col>
                </Row>
                <CardFooter>
                    <MODALPROFILE 
                        title="skills"
                        btntitle="تغییر اطلاعات"
                    >
                        <FormGroup>
                            <Input type="text" name="phone" id="phone" placeholder="تلفن همراه" />
                        </FormGroup>
                        <FormGroup>
                            <Input type="select" name="gender" id="gender">
                                <option selected>جنسیت را انتخاب کنید</option>
                                <option>مرد</option>
                                <option>زن</option>
                            </Input>
                        </FormGroup>
                        <FormGroup>
                            <Input type="text" name="birthyear" id="birthyear" placeholder="تاریخ تولد" />
                        </FormGroup>
                        <FormGroup>
                        <Input type="text" name="address" id="Address" placeholder="آدرس محل سکونت"/>
                        </FormGroup>
                    </MODALPROFILE>
                </CardFooter>
            </Card>
          );
    }
};

export default InFormUser;
