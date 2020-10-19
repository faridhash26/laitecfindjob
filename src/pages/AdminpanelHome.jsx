import React, { Component } from 'react';
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
import InformToggle from '../component/common/admincomps/InformToggle';







class Adminpanel extends Component{
constructor(props){
    super(props);
    this.state={
        isOpen:false,
        users:[
            {
                username:"فرید هاشمیان",
                level:"a",
                documents:["javascript","mcsa2016"],
                projects:["laitec" , "adminpanel"],
                activeuser:true,
                
            }
        ]
    };
    
}




    render(){
       
        return(
            <>
                <Row>
                    <Col className="text-center">
                        <Button> اضافه کردن</Button>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <InformToggle/>
                        <InformToggle/>
                        <InformToggle/>
                        <InformToggle/>
                        <InformToggle/>
                        <InformToggle/>
                    </Col>
                </Row>
                
            </>
            
        )
    }

}
export default Adminpanel;