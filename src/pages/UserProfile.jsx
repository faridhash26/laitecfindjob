import React, { Component } from 'react';


import { Link } from 'react-router-dom';
import {
    Col,
    Row,
    Nav,
    NavItem,
    NavLink,
    Navbar,
    Container,
    Card, CardBody, Button, CardTitle, CardText, CardImg ,
    CardFooter,
    Input 
} from 'reactstrap';

import INFOUSER from '../component/common/profile/Inform-user';
import ABOUTME from '../component/common/profile/Aboutme_info';
import SKILLS from '../component/common/profile/Skill_info';
import DOCUMENTSINFO from '../component/common/profile/Documents_info';
import PROJECTSINFO from '../component/common/profile/Projects_info';
import MODALPROFILE from '../component/common/Modalforprofile';


class UserProfile extends Component{
    constructor(props){
        super(props);
        this.state={
            Userinformation:{
                firstname:"فرید ",
                lastname:"هاشمیان",
                email:"kingfarid76@gmail.com",
                password:"123457",
                phone:"09108858899",
                gender:"مرد",
                birthyear:"1376",
                address:"تهران-دانشکاه شریف- لایتک",
                about:["علاقه مند به کار", "منظم","دقیق"],
                skills:["hteml" , "css" , "javascript" , "reactjs"],
                documents:["web1","web2" , "mcsa2016"],
                projectsurl:["http://faridhashemrah.gigfa.com"]

            },
            InformUser:{
                title :"اطلاعات کاربر",
                classn:"2col"
            },
            about_me:{
                title:"درباره من",
                classn:"1col"
            },
            profskill:{
                title:"مهارت ها",
                classn:"1col"
            },
            degrees:{
                title:"مدارج و مدارک",
                classn:"1col"
            },
            proje:{
                title:"پروژه ها",
                classn:"1col"
            },
            modal:false
        }
    }


render(){
    const {
        firstname,
        lastname,
        email,
        password,
        phone,
        gender,
        birthyear,
        address,
        about,
        skills,
        projectsurl,
        documents
    }=this.state.Userinformation;


    const {
        InformUser,
        about_me,
        profskill,
        degrees,
        proje,
        modal
    } =this.state;
    return(
        <Container className="themed-container" fluid="sm">
            <Row>
                <Col>
                    <Card>
                        <Row>
                            <Col sm="5">
                                <CardImg top className="user-image" src="/assets/profilepic.jpg" alt="user image" />
                                <CardBody className="text-center">
                                    <Input type="file" name="file" id="exampleFile" />
                                </CardBody>
                            </Col>
                            <Col sm="7">
                                <CardBody>
                                    <CardText>نام :{firstname} </CardText>
                                    <CardText>نام خانوادگی: {lastname}</CardText>
                                    <CardText>ایمیل: {email}</CardText>
                                    <CardText>پسورد : *********</CardText>
                                </CardBody>
                                <CardFooter>
                                    <MODALPROFILE
                                        title="skills"
                                        btntitle="ارسال اطلاعات"
                                    />
                                </CardFooter>
                            </Col>
                        </Row>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col>
                    <INFOUSER/>
                </Col>
            </Row>
            <Row>
                <Col>
                    <ABOUTME/>
                </Col>
            </Row>
            <Row>
                <Col>
                    <SKILLS/>
                </Col>
            </Row>
            <Row>
                <Col>
                    <DOCUMENTSINFO/>
                </Col>
            </Row>
            <Row>
                <Col>
                    <PROJECTSINFO/>
                </Col>
            </Row>
        </Container>
        )
    }

}
export default UserProfile;