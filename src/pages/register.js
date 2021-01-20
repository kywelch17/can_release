import React, { useState } from 'react';
import firebase from 'firebase';
import { useHistory, Link } from 'react-router-dom';
import { Cookies} from 'react-cookie';

import { database } from '../config/firebase';
import { registerErrors } from '../helper/error';
import * as ROUTES from '../constants/routes';
import Form from '../components/form/index';

const Register = () => {
    const [type, setType] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState([]);

    const history = useHistory();

    const handleRegister = (e) => {
        e.preventDefault();

        let user = {
            type: type,
            name: name,
            email: email,
            password: password,
            confirmPassword: confirmPassword
        };

        setError(registerErrors(user));
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
            <Form>
                <Form.Base>
                    <Form.Title>Register</Form.Title>
                    <Form.Sheet>
                        <Form.Select
                            id='type'
                            value={type}
                            onChange={({ target }) => setType(target.value)}
                        >
                            <option value='brewery'>Brewery</option>
                            <option value='resale'>Resale</option>
                            <option value='personal'>Personal</option>
                        </Form.Select>
                        <Form.Input 
                            id='name'
                            type='text'
                            value={name}
                            onChange={({ target }) => setName(target.value)}
                            placeholder='Name'
                        />
                        <Form.Input 
                            id='email'
                            type='email'
                            value={email}
                            onChange={({ target }) => setEmail(target.value)}
                            placeholder='Email Address'
                        />
                        <Form.Input 
                            id='password'
                            type='password'
                            value={password}
                            onChange={({ target }) => setPassword(target.value)}
                            placeholder='Password'
                        />
                        <Form.Input 
                            id='confirmPassword'
                            type='password'
                            value={confirmPassword}
                            onChange={({ target }) => setConfirmPassword(target.value)}
                            placeholder='Password Confirm'
                        />
                    </Form.Sheet>
                    <Form.Submit onClick={handleRegister}>Submit</Form.Submit>
                    <Form.Alternative>
                        <Form.AltTitle>Register with:</Form.AltTitle>
                        <div>
                            <Form.AltIcon id='facebook' />
                            <Form.AltIcon id='google' />
                        </div>
                    </Form.Alternative>
                </Form.Base>
            </Form>
        </>
    )
}

export default Register;