import React, { useState } from 'react';
import firebase from 'firebase';
import { HeaderContainer } from '../container/header';
import { FooterContainer } from "../container/footer";
import { useHistory, Link } from 'react-router-dom';

import { database } from '../config/firebase';
import * as ROUTES from '../constants/routes';
import Form from '../components/form/index';

const Register = () => {
    const [type, setType] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');
    const [error, setError] = useState([]);

    const history = useHistory();

    const handleRegister = (e) => {
        e.preventDefault();

        let user = {
            type: type,
            name: name,
            email: email,
            password: password,
            passwordConfirm: passwordConfirm,
            likedBeer: []
        };

        if (error.length > 0) {
            console.log(error);
            return;
        }

        database.collection('users').where('user.email', '==', email).get()
            .then(snapshot => {
                if (snapshot.size > 0) {
                    setError([...error, 'Already exists']);
                    console.log(error);
                    return;
                }
                else {
                    database.collection('users').doc(Math.random().toString(16).substr(2, 8)).set({
                        user,
                        createdAt: firebase.firestore.FieldValue.serverTimestamp(),
                        updatedAt: firebase.firestore.FieldValue.serverTimestamp()
                    })
                        .then(res => {
                            console.log('set: ' + res);
                        })
                        .catch(err => {
                            console.error(err);
                        })
                }
            })
            .catch(err => {
                console.error(err);
            });
    }

    return (
        <>
            <HeaderContainer />
            <Form>
                <Form.Base method='POST'>
                    <Form.Title>Register</Form.Title>
                    <Form.Select
                        value={type}
                        id='type'
                        onChange={({ target }) => setType(target.value)}
                    >
                        <option value='brewery'>Brewery</option>
                        <option value='resale'>Resale</option>
                        <option value='personal'>Personal</option>
                    </Form.Select>
                    <Form.Input
                        type='text'
                        value={name}
                        onChange={({ target }) => setName(target.value)}
                        id='name'
                        placeholder="Name"
                    />
                    <Form.Input
                        type='email'
                        value={email}
                        onChange={({ target }) => setEmail(target.value)}
                        id='email'
                        placeholder="Email"
                    />
                    <Form.Input
                        type='password'
                        value={password}
                        onChange={({ target }) => setPassword(target.value)}
                        id='password'
                        placeholder="Password"
                    />
                    <Form.Input
                        type='password'
                        value={passwordConfirm}
                        onChange={({ target }) => setPasswordConfirm(target.value)}
                        id='passwordConfirm'
                        placeholder="Confirm Password"
                    />
                    <Form.Submit
                        type='submit'
                        onClick={handleRegister}
                    >Submit</Form.Submit>
                    <Form.AltTitle>Register with:</Form.AltTitle>
                    <Form.Alternative>
                        <a href='https://facebook.com'>
                            <Form.AltIcon id='facebook' />
                        </a>
                        <a href='https://google.com'>
                            <Form.AltIcon id='google' />
                        </a>
                    </Form.Alternative>
                </Form.Base>
            </Form>
            <FooterContainer/>
        </>
    )
}

export default Register;