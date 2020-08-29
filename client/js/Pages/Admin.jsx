import React from 'react'
import {Form,Button} from 'react-bootstrap'
import Card from '@material-ui/core/Card'


export default function Admin(){

    const [state,updateState] = React.useState([]);

    const classes = React.useCallback(()=>{
        return 'd-flex align-items-center flex-columns justify-content-center flex-columns '
    })
    return (
        <div className={classes()+"h__100 img_my"}>
             <div className={classes()}>
    <Card>
    <Form className="m-auto pt-400 w-100 p-20 messages" id="myform" >
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
          <Button className="d-block w-100 text-center"  variant="dark">Send</Button>
        </Form.Group>
      </Form>
                   </Card>
             </div>
        </div>
    )
}