import React from 'react';
import Banner from '../Components/Banner'
import Footer from '../Components/Footer'
import Form from '../Components/Form'
import {connect} from 'react-redux'
import Chip from '@material-ui/core/Chip';
import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import _ from 'lodash';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';

function Icon(){
    return (
        <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-arrow-down-square-fill" fill="#f8de15" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm6.5 4.5a.5.5 0 0 0-1 0v5.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V4.5z"/>
        </svg>
        )
}


const maptostate = (state) => ({data:state.whyme,projects:state.data,questions:state.questions})

function createMarkup(html) {
    return {__html: html};
  }

function Main({data,projects,questions}){

    return (
        <>
        <Banner/>
        <section className=" why_me">
           <div className="wrap">
             <div className="why_me-main">
                   <h6 >3 Reasons Why Your Company Needs a Professional Website</h6>
                   <div className="why_me-main-num">
                         {
                             [data.map((el,index)=>{
                                return (
                                <div className="num-item " key={index}>
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
                                <div  key={index} className="shadows_b" style={{margin:"20px",textAlign:"right"}}>
                                     <div className="img" dangerouslySetInnerHTML={createMarkup(el.img)}></div>
                                      <div>
                                         <h2>{Object.keys(el)[0]}</h2>
                                         <p>{Object.values(el)[0]}</p>
                                      </div>
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

         <section >
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
                                            <CardContent className="d-flex flex-column justify-content-between">
                                                <Typography gutterBottom variant="h5" className={"text-center"} component="h2">{title} </Typography>
                                                 <div className="mt-20 d-flex flex-wrap justify-content-center">
                                                     {tags.split(',').map(elem=>{
                                                         return (
                                                            <Chip label={elem} className="margin_2" style={{flex:"1 1 25%",maxWidth:"100px"}} color="primary" key={elem+Math.random()}/>
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

        <section style={{paddingBottom:"0"}}>
             <div className="wrap">
               <h5 className="headline text-center">My reviews</h5>
               <div className="review container-md">
                <div className="card m-auto d-flex flex-row align-items-center shadows_b">
                   <div className="card-body">
                        <h5 className="card-title">Max Novitskiy</h5>
                        <p className="card-text"><small className="text-muted">UI designer</small></p>
                        <p className="card-text">
                        За время сотрудничества показатели по продвижению нашего сайта демонстрируeт только положительную динамику. Разработчик показал высокие деловые стандарты, индивидуальный подход, поиск оптимальных решений для достижения поставленных целей.
                        </p>
                   </div>
                   <div className="stars">
                     <Box component="fieldset" mb={1} borderColor="transparent">
                        <Typography component="legend">Read only</Typography>
                        <Rating name="read-only" value={4} readOnly />
                     </Box>
                   </div>
                </div>
                 <div className="m-auto mt-30 mrt_4_rem"><img src="/img/image-4.jpg" alt="" style={{objectFit:"contain",width:"100%"}}/></div>
               </div>
             </div>
        </section>
        
        <section id="questions">
            <div className="wrap">
               <h5 className="headline text-center">Questions</h5>
               <div className="d-flex flex__wrap__700 ccl">
                  <div className="shadow_b " style={{margin:"20px",paddingTop:"30px"}}>
                       {
                       questions.map(elem=>{
                           return (
                            <Accordion key={elem}>
                            <AccordionSummary
                              expandIcon={<Icon/>}
                              aria-controls="panel1a-content"
                              id="panel1a-header"
                            >
                              <Typography >{elem[0]}</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                              <Typography>
                                {elem[1]}
                              </Typography>
                            </AccordionDetails>
                          </Accordion>
                           )
                       })
                       }
               </div>
                <div className="image m-20 img-container img__700__center" style={{margin:"20px"}}>
                      <img src="/img/bg-slide.jpg" alt="" />
                </div>
               </div>
             </div>
        </section>
         <div className="triangle-block">
           <svg id="bigTriangleShadow" xmlns="http://www.w3.org/2000/svg" version="1.1" width="100%" height="100" viewBox="0 0 100 100" preserveAspectRatio="none">
            <path id="trianglePath1" fill="white" d="M0 0 L50 100 L100 0 Z"></path>
            <path id="trianglePath2" fill="#402C42" stroke="#3C283D" d="M50 100 L100 40 L100 0 Z"></path>
           </svg>
         </div>

        <Form/>
        <Footer/>
        </>
    )
}

export default connect(maptostate)(Main)