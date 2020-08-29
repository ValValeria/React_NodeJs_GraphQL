import React from 'react'
import {Form,Button} from 'react-bootstrap'
import Card from '@material-ui/core/Card'
import validator from 'validator'
import {context } from '../Context/data'


export default function Admin(){

    const [state,updateState] = React.useState([]);

    const classes = React.useCallback(()=>{
        return 'd-flex align-items-center flex-columns justify-content-center flex-columns '
    })


    const submit = async (e)=>{
        e.preventDefault();
        const email = document.querySelectorAll('#myform input');

        if(!validator.isEmail(email[0].value) || !validator.isLength(email[1].value,{min:6,max:20})) return window.location.replace('/');

        const response = await fetch('/login',{
            method:'POST',
            body:JSON.stringify({email:email[0].value,password:email[1].value})
        })

        if(response.ok){
            const json = await response.json();

            if(json.status=="admin") {
                context.isAdmin = true;
                return window.location.replace('/data');
            }
        }
    }

    return (
        <div className={classes()+"h__100 img_my"}>
             <div className={classes()}>
    <Card>
    <Form className="m-auto pt-400 w-100 p-20" id="myform" style={{maxWidth:"500px",minWidth:"400px"}}>
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
                return <Button color="primary" key={elem}>{elem}</Button>
              })
            }
        </Form.Group>
        <Form.Group>
          <Button className="d-block w-100 text-center"  onClick={submit}variant="dark">Send</Button>
        </Form.Group>
      </Form>
                   </Card>
             </div>
        </div>
    )
}