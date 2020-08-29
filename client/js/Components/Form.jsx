import React from 'react'
import {Form,Button} from 'react-bootstrap'


export default function (){
    return (
      <section style={{minHeight:"50vh"}} className="form__section light"> 
       <h5>Contact me</h5>
      <Form>
        <Form.Group controlId="exampleForm.ControlInput1">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Type here" />
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlTextarea1">
          <Form.Label>Example textarea</Form.Label>
          <Form.Control as="textarea" rows="3" placeholder="Your message must be less than 200 characters" />
        </Form.Group>
        <Form.Group>
          <Button varient={"dark"}>Send</Button>
        </Form.Group>
      </Form>
      </section>
    )
}