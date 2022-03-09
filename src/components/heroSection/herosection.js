import React from 'react';

const Herosection=()=>{
    return(
      <div className='container'>
          <div className='row' style={{marginTop:'200px'}}>
               <div className='col-lg-6 col-md-6 col-sm-6 col-xs-6' style={{display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column'}} >
                   <div >
                       <div>
                       <p className='Herotitle'>Start new... Today!</p>
                       <p className='bottomText'>Vivamus vestibulum elit efficitur, elementum sapien a, aliquet ipsum</p>
                       </div>
                   </div>
               </div>
               <div className='col-lg-6 col-md-6 col-sm-6 col-xs-6'>
                   <img src={require('../../images/56256.png')} className="img-fluid" alt="cover"/>
               </div>
          </div>
      </div>
    )
}

export default Herosection;