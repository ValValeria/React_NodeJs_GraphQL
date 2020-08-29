import React from 'react';
import Banner from '../Components/Banner'
import Footer from '../Components/Footer'
import Form from '../Components/Form'

const data = [
    {" It’s a platform you own and control.":`It’s great to be on social media, but when algorithms change (I’m looking at you Instagram) it can be frustrating. When you have your own website, you get to control exactly what information is out there, and when and how that information is displayed to users`,img:"https://d33wubrfki0l68.cloudfront.net/3ac42a60a07e4edd3907f79bad73ccb74edb2e70/8504d/static/apis@2x-f1fb43c194f7d6a0dae8bc7647396279.png"}
    ,{'Grow your audience':`Having a website means you aren’t limited in who you reach. It’s the World-Wide Web for a reason. Even if you’ve only got one brick-and-mortar shop, you can reach hundreds of people who never would have otherwise known that your business existed.`,img:"https://d33wubrfki0l68.cloudfront.net/0a4b1602643cfda1605ad30966236f9d163e2385/fe6ac/static/data@2x-958469fadd32f1e34c6debe97bc7ca21.png"}
    ,{"Easily provide information":`Having a website truly makes it easier to communicate with your mass audience of consumers. And you can control whatever information gets out there and how long it is available.`,img:"https://d33wubrfki0l68.cloudfront.net/ef3e0a9fd3f2eb6ba04ba01db2703d8005df289f/41ab2/static/experiences-edee52c0d97a21d0c058295cf4ab1f26.png"}
];

export default function Main(){
 

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
         <Form/>
        <Footer/>
        </>
    )
}