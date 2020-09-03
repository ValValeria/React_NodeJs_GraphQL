import React,{useEffect} from 'react'
import Button from '@material-ui/core/Button';

let i = 0 ;

function typeWriter() {
    let txt = "Web development";
    
    if (i < txt.length) {
      document.getElementById("mytitle").innerHTML += txt.charAt(i);
      i++;
      setTimeout(typeWriter, 1000);
    }
}

export default function Banner(){
    
    useEffect(()=>{
        typeWriter();
    },[0])

    return (
        <section className="banner">
             <div className="banner__content text-white text-center">
                 <h3 id="mytitle"></h3>
                 <div className="m-20 banner__buttons">
                   <Button variant="contained" color="primary" className="m-7">Portfolio</Button>
                   <Button variant="outlined" color="primary" href="#contacts"className="m-7 text-white" style={{borderColor:"white",display:"inline-block"}}>Contact me</Button>
                 </div>
             </div>
        </section>
    )
}