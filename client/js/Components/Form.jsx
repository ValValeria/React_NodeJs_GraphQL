import React from 'react'
import TextField from '@material-ui/core/TextField';
import {Form} from 'react-bootstrap'
import Button from '@material-ui/core/Button'
import {gql,useMutation} from '@apollo/client';
import {connect} from 'react-redux';
import  {isEmail} from'validator'


const mapStateToProps = state =>{
  return {portfolio:state.data}
}


const ADD_LETTER=gql(` 
       mutation AddTodo($email:String!,$message:String!){
          addLetter(email: $email,message:$message){
             email
             message
          }
       }
`)

function MyForm ({portfolio}){
  
    const email = React.useRef();

    const message = React.useRef();

    const [addLetter,{data}]= useMutation(ADD_LETTER)

    const [state,updateState] = React.useState([])


    const sumbit = (e)=>{
       const myemail = email.current.querySelector('input').value;
       const mymessage = message.current.querySelector('input').value
       if(isEmail(myemail) && (myemail.length>10 && myemail.length<30) && (mymessage.length>10 && mymessage.length<200)){
        addLetter({variables:{email:myemail,message:mymessage}})
        .then((v)=>{
             updateState(state.concat(['Your message will be delivered to me :)']));
        })
      } else {
             updateState(['Something is wrong :(']);
      }
    }

    return (
      <section style={{minHeight:"50vh"}} className="form__section " id="contact"> 
       <h5 className="headline text-white">Contact me</h5>
      <Form className="m-auto" id="myform" >
        <Form.Group controlId="exampleForm.ControlInput1" >
          <Button color="primary" className="pl-0 btn_not-hover">Your Email</Button>
          <TextField id="outlined-basic" className="w-100" label="Your email must be less than 30 and more than 10" variant="outlined" ref={email} type="email"/>
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlTextarea1">
          <Button color="primary" className="pl-0  btn_not-hover">Message</Button>
          <TextField id="outlined-basic" className="w-100" label="The Message  must be less than 200 and more than 10" rows={3} ref={message} variant="outlined" />
        </Form.Group>
        <Form.Group>
            {
              state.map(elem=>{
                return <Button color="primary" key={elem}>{elem}</Button>
              })
            }
        </Form.Group>
        <Form.Group>
          <Button  variant="contained" onClick={sumbit} className="d-block w-100 text-center hh"  color="primary">Send</Button>
        </Form.Group>
      </Form>
      </section>
    )
}

const Component = connect(mapStateToProps,null)(MyForm);

export default Component;