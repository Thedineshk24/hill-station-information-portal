import React, { useState } from 'react';
import {
    Form,
    Input,
    FormGroup,
    Label,
    Button
} from "reactstrap";

import {
    FaSignInAlt
} from "react-icons/fa";

import firebase from "firebase/app";
import { Redirect } from 'react-router-dom';

import {
    setEmail,
    setPassword,
} from "../features/user/SignInSlice";

import {useSelector,useDispatch} from "react-redux";
import {toast} from "react-toastify";
const SignIn = () => {
    const [inputEmail, setInputEmail] = useState("");
    const [inputPassword, setInputPassword] = useState("");
    const [signIn, setSignIn] = useState(false);

    const dispatch = useDispatch();

    const handleSignIn = (e) => {
        SignInUser();
        // redux dispatch 
        dispatchEmailAndPassword();
        e.preventDefault();
    }


    // store sign in info in redux signin slice
    const dispatchEmailAndPassword = () => {
        dispatch(setEmail(inputEmail));
        dispatch(setPassword(inputPassword));
    }

    const SignInUser = () => {
        firebase.auth().signInWithEmailAndPassword(inputEmail, inputPassword)
            .then((user) => {
                setSignIn(true);
            })
            .catch((error) => {
                toast(error.message,{
                    type:"error"
                })
            })
    }

    if (signIn) {
        return <Redirect to="/" />
    }
    return (
        <Form>
            <h1 className="p-5 text-center text-info">Sign In <FaSignInAlt className="text-warning" /> </h1>
            <FormGroup className="p-3">
                <Label for="email">Email</Label>
                <Input type="email" required name="email"
                    onChange={(e) => setInputEmail(e.target.value)}
                    value={inputEmail} placeholder="yourname@gmail.com" />
            </FormGroup>
            <FormGroup className="p-3">
                <Label for="password">password</Label>
                <Input type="password" required name="password"
                    onChange={(e) => setInputPassword(e.target.value)}
                    value={inputPassword} placeholder="************" />
            </FormGroup>
            <FormGroup className="p-3 text-center">
                <Button type="button" color="info" onClick={handleSignIn}>signIn <FaSignInAlt /> </Button>
            </FormGroup>
        </Form>
    )
}

export default SignIn
