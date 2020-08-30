import React from 'react'
import {Alert} from 'react-bootstrap'
import { gql, useQuery } from '@apollo/client';
import {user} from './Admin'
import {connect} from 'react-redux'

const GET = gql(`
    {
        letters{
            email,
            message
        }
    }
`)

function  Data({isAdmin}){
    const classes = React.useCallback(()=>{
        return 'd-flex align-items-center flex-columns text-center justify-content-center flex-columns '
    })

    const [isAd,update] = React.useState(isAdmin)

    if( !isAd) return window.location.replace('/')

    const { loading, error, data } = useQuery(GET);
    
    return (
        <div className={classes()+"h__100 img_my"} style={{backgroundImage:"url(https://images.unsplash.com/photo-1598633106556-81706e05c5ec?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80)"}}>
             <div className={classes()+" shadow messages flex-column"}>
                 <h6 className=" headline text-white ">Your messages</h6>
                 <div className="mt-20 w-100">
                     {
                         (data||[]).map(elem=>{
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


export default connect((state)=>({isAdmin:state.isAdmin}))(Data)