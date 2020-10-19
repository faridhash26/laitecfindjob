import React from 'react';


import FooterAdmin from './FooterAdmin';
import HeaderAdmin from './HeaderAdmin';




const BaseAdmin = props=>(
    <div>
        <HeaderAdmin/>
        <section  className="sectionadmin-container mt-5">
            {props.children}
        </section>
        <FooterAdmin/>
    </div>
)


export default BaseAdmin;
