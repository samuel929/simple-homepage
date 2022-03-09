import React,{useState,useEffect} from 'react';
import Herosection from '../heroSection/herosection';
import Secondection from '../SecondSection/secondSection';
import Thirdsection from '../ThirdSection/thirdSection';
import Fourthsection from '../fourthSection/fourthSection';
import Footer from '../footer/footer';
import SecondNav from '../secondNav/secondNav';
const Nav=()=>{
    const datas=[
        {
            img:require('../../images/blog/blog.png'),
            title:'Blog Title #1',
            body:'Blog excerpt - first lines - for approx two lines'
        },
        {
            img:require('../../images/blog/blog.png'),
            title:'Blog Title #1',
            body:'Blog excerpt - first lines - for approx two lines'
        },
        {
            img:require('../../images/blog/blog.png'),
            title:'Blog Title #1',
            body:'Blog excerpt - first lines - for approx two lines'
        },
        {
            img:require('../../images/blog/blog.png'),
            title:'Blog Title #1',
            body:'Blog excerpt - first lines - for approx two lines'
        }
    ]
    const [toggleState, setToggleState] = useState(1);
    const [smallNav,setSmallNav]=useState(true);
    const [mouse,setMouse]=useState(false)
    const [mouse1,setMouse1]=useState(false)
    const [mouse2,setMouse2]=useState(false)
    const [data,setData]=useState(datas)
    const toggleTab = (index) => {
         setToggleState(index);
        };

        useEffect(()=>{
            const small=()=>{
                if(window.innerWidth < 767){
                 setSmallNav(false)
                 if(smallNav === false){
                    const d= data.slice(0,2);
                    setData(d)
                  }
                }else{
                    setSmallNav(true)
                    const datas=[
                        {
                            img:require('../../images/blog/blog.png'),
                            title:'Blog Title #1',
                            body:'Blog excerpt - first lines - for approx two lines'
                        },
                        {
                            img:require('../../images/blog/blog.png'),
                            title:'Blog Title #1',
                            body:'Blog excerpt - first lines - for approx two lines'
                        },
                        {
                            img:require('../../images/blog/blog.png'),
                            title:'Blog Title #1',
                            body:'Blog excerpt - first lines - for approx two lines'
                        },
                        {
                            img:require('../../images/blog/blog.png'),
                            title:'Blog Title #1',
                            body:'Blog excerpt - first lines - for approx two lines'
                        }
                    ]
                       setData(datas)
                }
             }
         
             window.addEventListener('resize', small);
        },[smallNav,data])
      
     
    return(<>
           {
               smallNav 
               ?
               (  <div className={`navs`}> 
               <div className='container'>
                   <div >
                   <div className='navs-container'> 
                   
                   <div className={"nav-links "}
                   onClick={() => toggleTab(1)}
                   >
                       <p >Home</p>
                       <div className={toggleState === 1 ?"active-tabs": {display:'none'}}></div>
                   </div>
                   <div className='nav-links' onMouseOver={()=>setMouse(true)} onMouseLeave={()=>setMouse(false)} >
                       <p>Products</p>
                       <div className={mouse ? "hover":{display:'none'}}></div>
                   </div>
                   <div className='log'>
                       <img src={require('../../images/Logo2.png')} style={{width:'45px',height:'41px'}} alt="logo"/>
                   </div>
                   <div className='nav-links' onMouseOver={()=>setMouse1(true)} onMouseLeave={()=>setMouse1(false)}>
                       <p>Blog</p>
                       <div className={mouse1 ? "hover2":{display:'none'}}></div>
                   </div>
                   <div className='nav-links' onMouseOver={()=>setMouse2(true)} onMouseLeave={()=>setMouse2(false)}>
                       <p>Contact</p>
                       <div className={mouse2 ? "hover":{display:'none'}}></div>

                   </div>
                   </div>
                   </div>
               </div>
           </div>):(
               <SecondNav toggleState={toggleState}/>
           )
           }
          
        
     

     <div>
          <div className={toggleState === 1 ? "content active-content":"content"}>
          <Herosection/>
       <Secondection/>
       <Thirdsection/>
       <Fourthsection data={data}/>
       <Footer/>
          </div>
     </div>
     </>
    )
}

export default Nav;