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
    CardSubtitle,
    Container
 } from 'reactstrap';


const InforComponent =()=>{
    return(
        <div>
            <p className="aboutus"> درباره ما</p>
            <Row>
           <Col sm="">
               <img src="/assets/info-background2.png" className="infoback2" alt="info background2" />
           </Col>
            <Col sm="9">
                <div className="infoback1">
                    <p >
                    ما در لایتک تلاش داریم تا شما را به شغل مورد نظر خود برسانبم این سرویس به 
                    صورت رایگان بود و شما میتوانید به راحتی ثبت نام کرده و از مزایای این سرویس 
                    استفاده کنید.
                    ما باور داریم کارآفرینان، فریلنسرها/کارمندان موفق می توانند دنیای بهتری را برای 
                    همه ما خلق کنند.
                    ما کمک می کنیم از وقت خود بهتر استفاده کنید و درآمد بیشتری کسب کنید. 
                    همینطور با کم کردن رفت و آمدهای غیر ضروری، به بهبود محیط زیست کمک می 
                    کنیم
                    اگر افرادی را می شناسید که به خدمات پونیشا نیاز دارند، همین امروز آنها را به لایتک 
                    دعوت کنید.


                     
                    </p>
                </div>
               
            </Col>
       </Row>
        </div>
       
            
      

                
                
       
        
    )
}
export default InforComponent;