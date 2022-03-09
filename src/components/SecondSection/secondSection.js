import React from 'react';

const Secondection=()=>{
    return(
      <div className='container'>
          <div className='row' style={{marginTop:'300px',marginBottom:'200px'}}>
          <p className='headingsectiond2'>Lorem ipsum something</p>
          <div className='col-lg-6 col-md-6 col-sm-6 col-xs-6'>
                   <div style={{display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column'}}>
                   <img src={require('../../images/56217/56217.png')} className="img-fluid" alt="cover"/>
                   </div>
               </div>
               <div className='col-lg-6 col-md-6 col-sm-6 col-xs-6' style={{display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column'}} >
                   <div >
                       <div>
                       <p className='secondsectiondHeadingText'>New Product, new Story</p>
                       <p className='paragraph'>Vivamus vestibulum elit efficitur, elementum sapien a, aliquet ipsum. Fusce placerat dolor id cursus finibus. Aliquam tempus facilisis ipsum sit amet molestie. Proin lobortis eros a turpis tempor, sed ornare augue aliquam. Donec imperdiet nulla ut placerat molestie. In hendrerit blandit ante facilisis ultrices. Mauris vulputate metus sit amet ex dignissim, sed hendrerit nunc rhoncus.</p>
                       </div>
                   </div>
               </div>
      
          </div>
      </div>
    )
}

export default Secondection;