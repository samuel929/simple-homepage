import React from 'react';


const Thirdsection = () => {
    const data=[
        {text:'Logo #1'},
        {text:'Logo #1'},
        {text:'Logo #1'},
        {text:'Logo #1'},
        {text:'Logo #1'},
      ]
    return (
        <div className='thrirdsectionContainer' style={{display:'flex',justifyContent:'center',alignItems:'baseline',flexDirection:'column'}}>
            <div className='container' >
                <div >
                <div className='row' style={{overflowX:'auto',whiteSpace:'nowrap'}}>
                <div   style={{display:'flex',justifyContent:'space-around',alignItems:'center',flexDirection:'row'}}>

                 {data.map((item)=>(
                    
                        <p  key={item.text}className='scroll-text'>{item.text}</p>
                        
                    
                 ))}
                  </div>
               </div>
                </div>
            </div>
        </div>

    )
}

export default Thirdsection;