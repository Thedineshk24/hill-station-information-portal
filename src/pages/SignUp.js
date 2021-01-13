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
    setEmail,
    setPassword,
    selectEmail,
    selectPassword
  } from '../features/user/SignupSlice';

  // firebase
import firebase from "firebase/app";

const SignUp = () => {
  const dispatch = useDispatch();
  let email = useSelector(selectEmail);
  let password = useSelector(selectPassword);
  console.log("REDUX",email);
  console.log("REDUX",password);
  const [isSignUp,setSignUp] = useState(false);
  const [loggedInUser,setLoggedInUser] = useState({});

  const [inputEmail,setInputEmail] = useState("");
  const [inputPassword,setInputPassword] = useState("");

  const handleSubmit = (e) => {
    Registartion();
    dispatchEmailAndPassword();
    e.preventDefault();
  }

  const dispatchEmailAndPassword = () => {
        // dispatching payload
        dispatch(setEmail(inputEmail));
        dispatch(setPassword(inputPassword));
  }
 


  const Registartion = () => {
    firebase.auth().createUserWithEmailAndPassword(inputEmail,inputPassword)
    .then((user) => {
      setSignUp(true);
      setLoggedInUser(user);
    })
    .catch((error) => {
      alert(error.message);
    });

    // console.log(email);
    // console.log(password);

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
            <Input type="email" name="email" placeholder="yourname@gmail.com" value={inputEmail}
             onChange={(e) => setInputEmail(e.target.value)} required />
          </FormGroup>

          <FormGroup className="p-3">
            <Label for="password">password</Label>
            <Input type="password" name="password" value={inputPassword}
            onChange={(e) => setInputPassword(e.target.value)}
            placeholder="*************" required />
          </FormGroup>

          <FormGroup className="p-3 text-center">
            <Button type="submit" color="info" onClick={handleSubmit}> sign Up </Button>
          </FormGroup>
        </Form>
    )
}

export default SignUp
