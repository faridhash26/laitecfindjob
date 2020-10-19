
import React ,{ Component } from "react";
import { Container ,Row ,Col } from 'reactstrap';

class FooterAdmin extends Component{
    render() {
        return(
            <div className="footer-admin text-center">
            <Container>
                <Row>
                    <Col xs="4"/>
                    <Col xs="4">
                        <h5 className="mt-3">
                            تمامی حقوق این سایت متعلق به لایتک میباشد &copy;
                        </h5>
                    </Col>
                    <Col xs="4"/>
                </Row>
            </Container>
       
        </div>
        )
    }
}
export default FooterAdmin;