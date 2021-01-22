import React, { useState } from 'react';
import { HeaderContainer } from '../container/header';
import { FooterContainer } from '../container/footer';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';

import { database } from '../config/firebase';
import Form from '../components/form';

const Login = () => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [error, setError] = useState([]);

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            let data = await database.collection('users').where('email', '==', email).get();
            for (let d of data.docs) {
                console.log(d.email);
            }
            
        }
        catch(error) {
            console.log(error);
        }
    }

    return (
        <>
            <HeaderContainer />
            <Form>
                <Form.Base method='POST'>
                    <Form.Title>Login</Form.Title>
                    <Form.Input
                        type='email'
                        value={email}
                        onChange={({ target }) => setEmail(target.value)}
                        id='email'
                        placeholder="bwayne@gotham.com"
                    />
                    <Form.Input
                        type='password'
                        value={password}
                        onChange={({ target }) => setPassword(target.value)}
                        id='password'
                        placeholder="Batcave1232$"
                    />
                    
                    <Form.Submit
                        type='submit'
                        onClick={handleLogin}
                    >Submit</Form.Submit>
                    <Form.AltTitle>Login with:</Form.AltTitle>
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

export default Login;