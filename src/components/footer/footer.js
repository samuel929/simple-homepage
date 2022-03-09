import React from 'react';

const Footer=()=>{
    return(
     <div className='footer' >
         <div className='container'  style={{display:'flex',justifyContent:'center',alignItems:'baseline',flexDirection:'column'}}>
              <div style={{display:'flex'}}>
              <img src={require("../../images/Logo (1)/logo.png")} className="img-fluid" style={{width:'20px',height:'20px'}} alt="footer-logo"/>
              <p className='footer-text'>All rights reserved ©</p>
              </div>
         </div>
     </div>
    )
}

export default Footer;