import React from 'react'
import {Alert} from 'react-bootstrap'

export default function (){
    const classes = React.useCallback(()=>{
        return 'd-flex align-items-center flex-columns text-center justify-content-center flex-columns '
    })

    const data = [
        {"message":"ksksskksskks","email":"jsjsjjsjsj",'date':'2003'}
    ]
    
    return (
        <div className={classes()+"h__100 img_my"} style={{backgroundImage:"url(https://images.unsplash.com/photo-1598633106556-81706e05c5ec?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80)"}}>
             <div className={classes()+" shadow messages flex-column"}>
                 <h6 className=" headline text-white ">Your messages</h6>
                 <div className="mt-20 w-100">
                     {
                         data.map(elem=>{
                             return (
                            <Alert variant="dark" className="m-auto w-100"dismissible key={elem}>
                                <Alert.Heading>{elem.email}</Alert.Heading>
                                <p>
                                   {elem.message}
                                </p>
                              </Alert>
                             )
                         })
                     }
                 </div>
              </div>
        </div>         
    );
}
