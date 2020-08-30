import React, { useEffect } from 'react'
import {Form,Button} from 'react-bootstrap'
import Card from '@material-ui/core/Card'
import validator from 'validator'
import {connect} from 'react-redux';


const user = (state)=>({isAdmin:state.isAdmin})

const login = (dispatch)=>({loginAction:()=>dispatch({type:"LOGIN"})})


function Admin({isAdmin,loginAction}){

    const [state,updateState] = React.useState([]);
    
    const classes = React.useCallback(()=>{
        return 'd-flex align-items-center flex-columns justify-content-center flex-columns '
    })

    useEffect(()=>{
       if(isAdmin){
           window.location.replace('/data')
       }
    },[2])

    const submit = async (e)=>{
        e.preventDefault();

        e.stopPropagation();

        const email = document.querySelectorAll('#myform input');

        if(!validator.isEmail(email[0].value) || !validator.isLength(email[1].value,{min:6,max:20})) return window.location.replace('/');

        const response = await fetch('/login',{
            method:'POST',
            body:JSON.stringify({email:email[0].value,password:email[1].value}),
            headers:{
                "Content-Type":"application/json"
            }
        })

        if(response.ok){
            const json = await response.json();

            if(json.status=="admin") {
                loginAction()
                updateState(state.concat(["Welcome admin. Visit  the admin page"]))
            } else {
                updateState(state.concat(["You are not the admin"]))
            }
        }
    }

    return (
        <div className={classes()+"h__100 img_my"}>
             <div className={classes()}>
    <Card>
    <div className="m-auto pt-400 w-100 p-20" id="myform" style={{maxWidth:"500px",minWidth:"400px"}}>
        <Form.Group>
            <h5 className="headline text-center">Login</h5>
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlInput1" >
               <Form.Label>Email address</Form.Label>
               <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlTextarea1">
             <Form.Label>Password</Form.Label>
             <Form.Control type="password" placeholder="Enter password" />
        </Form.Group>
        <Form.Group>
            {
              state.map(elem=>{
                return <Button varient="danger" className="d-block w-100" key={elem}>{elem}</Button>
              })
            }
        </Form.Group>
        <Form.Group>
          <Button className="d-block w-100 text-center"  onClick={submit}variant="dark">Send</Button>
        </Form.Group>
      </div>
                   </Card>
             </div>
        </div>
    )
}

export default connect(user,login)(Admin)