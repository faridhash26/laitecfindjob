import React from 'react';


import Header from './Header';
import Footer from './Footer';


const Base= props=>{
    return(
        <div>
        <Header/>
        <section  className="section-container">
            {props.children}
        </section>
        <Footer/>
    </div>
    )
}
    



export default Base;
