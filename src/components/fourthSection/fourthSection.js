import React,{useState,useEffect} from 'react'
import { isCompositeComponentWithType } from 'react-dom/test-utils'

const Fourthsection=({data})=>{
    
   
   
    
  
    return(
        <div style={{padding:'200px 0 200px 0'}}>
            <div className='container'>
                <div className='row '>
                   {
                       data.map((item)=>{
                        return(
                              <div key={item.img} className='col'>
                                <div className='d-flex justify-content-center'>
                                    <div>
                              <img src={item.img} className="img-fluid"style={{borderRadius:'8px',width:'282px',height:'144px'}} alt="logo"/>
                               <p className='blogHeading'>{item.title}</p>
                               <p className='paragraphblog'>{item.body}</p>
                               </div>
                               </div>
                              </div>
                       )})
                   }
                </div>
          <div style={{display:'flex',justifyContent:'center',marginTop:'100px'}}>
              <button className='button'>Read more</button>
          </div>
      </div>
        </div>
     
    )
}

export default Fourthsection;