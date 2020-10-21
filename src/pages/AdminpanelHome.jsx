import React, { Component } from 'react';
import {
    Button,
    Row,
    Col
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