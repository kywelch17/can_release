import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';

import { database } from '../lib/firebase';
import { registerError } from '../helper/error';
import Form from '../components/form/index';

const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState([]);

    const handleRegister = async (e) => {
        e.preventDefault();

       
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
                        onChange={({ target }) => setEmail(target.value)}
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