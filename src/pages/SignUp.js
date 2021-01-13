import React,{useState} from 'react';
import {
    Button,
    Form,
    FormGroup,
    Input,
    Label,
    Toast,
    ToastBody,
    ToastHeader
} from "reactstrap";

import {
  Redirect
} from "react-router-dom";

import {
    FaUserPlus
} from "react-icons/fa";

// redux
import { useSelector, useDispatch } from 'react-redux';

import {
    email,password
  } from '../features/user/SignupSlice';

  // firebase
import firebase from "firebase/app";

const SignUp = () => {
  const dispatch = useDispatch();
  // const [email,setEmail] = useState("");
  // const [password,setPassword] = useState("");
  const [isSignUp,setSignUp] = useState(false);
  const [loggedInUser,setLoggedInUser] = useState({});

  const handleSubmit = (e) => {
    Registartion();
    e.preventDefault();
  }

  const Registartion = () => {
    firebase.auth().createUserWithEmailAndPassword(email,password)
    .then((user) => {
      setSignUp(true);
      setLoggedInUser(user);
    })
    .catch((error) => {
      alert(error.message);
    });

    console.log(email);
    console.log(password);

    // setEmail("");
    // setPassword("");
  }

    console.log(isSignUp);
    if(isSignUp){
      return <Redirect to="/" />
    }

    return (
        <Form>
            <h1 className="p-5 text-center text-info">Sign Up <FaUserPlus className="text-warning" /> </h1>
          
          <FormGroup className="p-3">
            <Label for="email">Email</Label>
            <Input type="email" name="email" placeholder="yourname@gmail.com" value={email}
             onChange={(e) => dispatch(email({email:email}))} required />
          </FormGroup>

          <FormGroup className="p-3">
            <Label for="password">password</Label>
            <Input type="password" name="password" value={password}
            onChange={(e) => dispatch(password({password:password}))}
            placeholder="*************" required />
          </FormGroup>

          <FormGroup className="p-3 text-center">
            <Button type="submit" color="info" onClick={handleSubmit}> sign Up </Button>
          </FormGroup>
        </Form>
    )
}

export default SignUp
