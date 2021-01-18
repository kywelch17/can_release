import React, { useState } from 'react';
import firebase from 'firebase';
import { useHistory } from 'react-router-dom';

import { database } from '../lib/firebase';
import * as ROUTES from '../constants/routes';
import Form from '../components/form/index';

const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState([]);

    const history = useHistory();

    const handleRegister = async (e) => {
        e.preventDefault();

        try {
            let user = {
                name: name,
                email: email,
                password: password
            };
            let ref = database.collection('users');
            let userRef = ref.doc(name.replace(/\s/g, ''));
            await userRef.set({
                user,
                createdAt: firebase.firestore.FieldValue.serverTimestamp(),
                updatedAt: firebase.firestore.FieldValue.serverTimestamp()
            });
            history.push(ROUTES.LANDING);
        }
        catch(error) {
            console.error(error);
        }
    }

    return (
        <>
            <Form>
                <Form.Base method='POST'>
                    <Form.Title>Register</Form.Title>
                    { error && <Form.Error></Form.Error>}
                    <Form.Label>Name</Form.Label>
                    <Form.Input
                        type='text'
                        value={name}
                        onChange={({ target }) => setName(target.value)}
                        id='name'
                        placeholder="Bruce Wayne"
                    />
                    <Form.Label>Email Address</Form.Label>
                    <Form.Input
                        type='email'
                        value={email}
                        onChange={({ target }) => setEmail(target.value)}
                        id='email'
                        placeholder="bwayne@gotham.com"
                    />
                    <Form.Label class="after">Password</Form.Label>
                    <Form.Input
                        type='password'
                        value={password}
                        onChange={({ target }) => setPassword(target.value)}
                        id='password'
                        placeholder="Batcave1232$"
                    />
                    <Form.Switch id='register'>Already have an account?</Form.Switch>
                    <Form.Submit
                        type='submit'
                        onClick={handleRegister}
                    >Submit</Form.Submit>
                </Form.Base>
            </Form>
        </>
    )
}

export default Register;