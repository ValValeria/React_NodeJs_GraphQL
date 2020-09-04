import React,{useEffect} from 'react'
import Button from '@material-ui/core/Button';
import _ from 'lodash'
import {timer} from 'rxjs';
import {takeWhile,skipWhile} from 'rxjs/operators';

let i = 0 ;
let txt = "Web development";

function typeWriter() {
    const title = document.getElementById("mytitle");
    const line = document.getElementById('line');

    if (i < txt.length) {
      title.textContent += txt.charAt(i);
      i++;
      line.classList.toggle('none');
      line.classList.toggle('scale');
    } else{
      line.classList.add('none')
    }

}

export default function Banner(){
    
    const ref = React.useRef();

    useEffect(()=>{

        timer(0,1000)
        .pipe(
            skipWhile(v=>{
                ref.current.textContent = "";
                return window.scrollY>700;
            }),
            takeWhile(v=>ref.current.textContent.length<=txt.length),
        ).subscribe(v=>{
            typeWriter();
        })
        
    },[0])
  

    return (
        <section className="banner">
             <div className="banner__content text-white text-center">
                 <h3><span id="mytitle" ref={ref}></span><span id="line" className="none">|</span></h3>
                 <div className="m-20 banner__buttons">
                   <Button variant="contained" color="primary" className="m-7">Portfolio</Button>
                   <Button variant="outlined" color="primary" href="#contacts"className="m-7 text-white" style={{borderColor:"white",display:"inline-block"}}>Contact me</Button>
                 </div>
             </div>
        </section>
    )
}