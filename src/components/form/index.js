import React from 'react';
import { FaGoogle, FaFacebook } from 'react-icons/fa';

import { Container, Base, Title, User, Label, Input, Select, Submit, SubmitText, Switch, Link, Error, Alt, AltText, AltIcon } from './styles/form';

export default function Form ({ children, ...restProps }) {
    return <Container {...restProps}>{ children }</Container>;
}

Form.Base = function FormBase ({ children, ...restProps }) {
    return <Base {...restProps}>{ children }</Base>
}

Form.Title = function FormTitle ({ children, ...restProps }) {
    return <Title {...restProps}>{ children }</Title>
}

Form.User = function FormUser ({ children, ...restProps }) {
    return <User {...restProps}>{ children }</User>;
}

Form.Label = function FormLabel ({ children, ...restProps }) {
    return <Label {...restProps}>{ children }</Label>
}

Form.Input = function FormInput ({ children, ...restProps }) {
    return <Input {...restProps}>{ children }</Input>
}

Form.Select = function FormSelect ({ children, ...restProps }) {
    console.log(restProps);
    return <Select {...restProps}>{ children }</Select>;
}

Form.Switch = function FormSwitch ({ children, ...restProps }) {
    return (
        <>
            {restProps.id === 'register' && 
                <Link href={'/login'}>
                    <Switch {...restProps}>{children}</Switch>
                </Link>
            }
            {restProps.id === 'login' && 
                <Link href={'register'}>
                    <Switch {...restProps}>{children}</Switch>
                </Link>
            }
        </>
    );
}

Form.Submit = function FormSubmit ({ children, ...restProps }) {
    return (<Submit {...restProps}><SubmitText>{ children }</SubmitText></Submit>);
}

Form.Error = function FormError ({ children, ...restProps }) {
    return <Error {...restProps}>{ children }</Error>;
}

Form.Alt = function FormAlt ({ children, ...restProps }) {
    return <Alt {...restProps}>{ children }</Alt>;
}

Form.AltText = function FormAltText ({ children, ...restProps }) {
    return <AltText {...restProps}>{ children }</AltText>;
}

Form.AltIcon = function FormAltIcon ({ children, ...restProps }) {
    return (
        <>
            {restProps.id === 'facebook' && <AltIcon><FaFacebook /></AltIcon>}
            {restProps.id === 'google' && <AltIcon><FaGoogle /></AltIcon>}
        </>
    );
}