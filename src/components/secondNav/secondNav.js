import React, { useState } from 'react';


const SecondNav=()=>{

    const [show,setShow]=useState(true)
    const [mouse,setMouse]=useState(false)
    const [mouse1,setMouse1]=useState(false)
    const [mouse2,setMouse2]=useState(false)
    const shows=()=>{
        setShow(!show)
    }
    return(
    <>
     <div className='res-na'>
        <div className='container'>
             <div style={{display:'flex'}}>
                 <div onClick={shows}>
                     {
                         show?
                         <img src={require('../../images/bars.png')} style={{height:'18px',width:'37px',marginTop:'18px',marginLeft:'40px'}}  />
:                         <img src={require('../../images/x.png')} style={{height:'18px',width:'16px',marginTop:'18px',marginLeft:'40px'}}  />

                     }
                 </div>
                 <img src={require('../../images/Logo2.png')} style={{height:'35px',marginTop:'9px',marginLeft:'114px'}}/>
             </div>
        </div>
     </div>
     {
         show ?
         null:
         (
             <div style={{height:'807px',width:'100%',display:'flex',flexDirection:'column'}}>
                 <div style={{position:'relative',left:'48px',top:'160px'}}>
                 <div className='navs-container'> 
                   
                   <div className={"res-nav-links "}
                   >
                       <div style={{display:'flex'}}>
                       <div className='ap'></div>
                       <p style={{position:'relative',right:'9px'}}>Home</p>
                       </div>
                   </div>
                   <div className='res-nav-links'>
                       <div style={{display:'flex'}} onMouseOver={()=>setMouse(true)} onMouseLeave={()=>setMouse(false)}>
                       <div className={mouse ? 'ap2':{display:'none'}}></div>
                       <p style={{position:'relative',right:'9px'}}>Products</p>
                       </div>
                   
                   </div>
                   <div className='res-nav-links'>
                       <div style={{display:'flex'}} onMouseOver={()=>setMouse1(true)} onMouseLeave={()=>setMouse1(false)}>
                       <div className={mouse1 ? 'ap2':{display:'none'}}></div>
                       <p style={{position:'relative',right:'9px'}}>Blog</p>
                       </div>
                   </div>
                   <div className='res-nav-links'>
                      <div style={{display:'flex'}} onMouseOver={()=>setMouse2(true)} onMouseLeave={()=>setMouse2(false)}>
                      <div className={mouse2 ? 'ap2':{display:'none'}}></div>
                      <p style={{position:'relative',right:'9px'}}>Contact</p>
                      </div>
                   </div>
                   </div>
                   </div>
             </div>
         )
     }
     </>
    )
}

export default SecondNav;