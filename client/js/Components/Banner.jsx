import React from 'react'
import Button from '@material-ui/core/Button';

export default function Banner(){
    return (
        <section className="banner">
             <div className="banner__content text-white text-center">
                 <h3>Web development</h3>
                 <div className="m-20 banner__buttons">
                   <Button variant="contained" color="primary" className="m-7">Portfolio</Button>
                   <Button variant="outlined" color="primary" href="#contacts"className="m-7 text-white" style={{borderColor:"white",display:"inline-block"}}>Contact me</Button>
                 </div>
             </div>
        </section>
    )
}