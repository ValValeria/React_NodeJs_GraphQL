import React from 'react'
import TextField from '@material-ui/core/TextField';
import {Form} from 'react-bootstrap'
import Button from '@material-ui/core/Button'

export default function (){
    return (
      <section style={{minHeight:"50vh"}} className="form__section light "> 
       <h5 className="headline text-white">Contact me</h5>
      <Form className="m-auto">
        <Form.Group controlId="exampleForm.ControlInput1" >
          <TextField id="outlined-basic" className="w-100" label="Your email" variant="outlined" type="email"/>
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlTextarea1">
          <TextField id="outlined-basic" className="w-100" label="Message" rows={3} variant="outlined" />
        </Form.Group>
        <Form.Group>
          <Button  variant="contained" className="d-block w-100"  color="primary">Send</Button>
        </Form.Group>
      </Form>
      </section>
    )
}