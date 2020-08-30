import React from 'react';
import Banner from '../Components/Banner'
import Footer from '../Components/Footer'
import Form from '../Components/Form'
import {connect} from 'react-redux'
import Chip from '@material-ui/core/Chip';
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import _ from 'lodash'

const maptostate = (state) => ({data:state.whyme,projects:state.data})

function Main({data,projects}){

    return (
        <>
        <Banner/>
        <section className="dark why_me">
           <div className="wrap">
             <div className="why_me-main">
                   <h6 className="text-white">5 Reasons Why Your Company Needs a Professional Website</h6>
                   <div className="why_me-main-num">
                         {
                             [data.map((el,index)=>{
                                return (
                                <div className="num-item text-white" key={index}>
                                     <span>0{index+1}</span>
                                     {Object.keys(el)[0]}
                                 </div>);
                             })]
                         }
                   </div>
             </div>
             <div className="why_me-decsr">
                        {
                             [data.map((el,index)=>{
                                return (
                                <div className="text-white" key={index}>
                                     <div className="img"><img src={el.img} alt="..." /></div>
                                     <h2>{Object.keys(el)[0]}</h2>
                                     <p>{Object.values(el)[0]}</p>
                                 </div>);
                             })]
                         }
             </div>
           </div>
        </section>

         <section>
            <div className="section__content">
                 <h5 className="headline text-center ">My Skills</h5>
                 <div className="mx-80 m-auto card__items">
                     {
                          _.map({"React":"/img/react.svg","VueJs":"/img/vuejs_logo.png","Angular":"/img/angular.svg"},(value,key)=>{
                              return(
                                  <div className="skills__card" key={key}>
                                      <div className="d-flex justify-content-center"><img src={value} alt=""/></div>
                                      <div className="skills__card-t text-center">{key}</div>
                                  </div>
                              )
                          })
                     }
                 </div>
            </div>
         </section>

         <section className="light">
            <div className="section__content">
                 <h5 className="headline text-center ">My Projects</h5>
                  <div className="mx-80 m-auto card__items">
                       {
                           projects.map(({title,tags,link,img})=>{
                                 return (
                                     <Card key ={title} className="mycard ">
                                         <CardActionArea>
                                             <CardMedia 
                                              image={img}
                                              component="img"
                                              alt="......"
                                              height="140"
                                             />
                                            <CardContent >
                                                <Typography gutterBottom variant="h5" className={"text-center"} component="h2">{title} </Typography>
                                                 <div className="mt-20 d-flex flex-wrap justify-content-center">
                                                     {tags.split(',').map(elem=>{
                                                         return (
                                                            <Chip label={elem} className="margin_2" color="primary" key={elem+Math.random()}/>
                                                         )
                                                     })}
                                                </div>       
                                                <CardActions>
                                                    <Button href={link} color="primary" className="d-block w_100  text-center margin_20" style={{display:"block",width:"200px",margin:"20px auto !important"}} variant="outlined">Show</Button>
                                                </CardActions>
                                            </CardContent>
                                          </CardActionArea>  
                                     </Card>
                                 )
                           })
                       }
                  </div>
            </div>
         </section>

         <Form/>
        <Footer/>
        </>
    )
}

export default connect(maptostate)(Main)