import React from 'react';
import { FaGoogle, FaFacebook } from 'react-icons/fa';

import { Container, Base, Title, Sheet, Input, Select, Post, Submit, Alternative, AltTitle, AltIcon } from './styles/form';

export default function Form ({ children, ...restProps }) {
    return <Container {...restProps}>{ children }</Container>;
}

Form.Base = function FormBase ({ children, ...restProps }) {
    return <Base {...restProps}>{ children }</Base>;
}

Form.Sheet = function FormSheet ({ children, ...restProps }) {
    return <Sheet {...restProps}>{ children }</Sheet>;
}

Form.Title = function FormTitle ({ children, ...restProps }) {
    return <Title {...restProps}>{ children }</Title>;
}

Form.Input = function FormInput ({ children, ...restProps }) {
    return <Input  {...restProps}>{ children }</Input>;
}

Form.Select = function FormSelect ({ children, ...restProps }) {
    return <Select {...restProps}>{ children }</Select>;
}

Form.Post = function FormPost ({ children, ...restProps }) {
    return <Post {...restProps}>{ children }</Post>;
}

Form.Submit = function FormSubmit ({ children, ...restProps }) {
    return <Submit {...restProps}>{ children }</Submit>;
}

Form.Alternative = function FormAlternative ({ children, ...restProps }) {
    return <Alternative {...restProps}>{ children }</Alternative>;
}

Form.AltTitle = function FormAltTitle ({ children, ...restProps }) {
    return <AltTitle {...restProps}>{ children }</AltTitle>;
}

Form.AltIcon = function FormAltIcon ({ children, ...restProps }) {
    return (
        <>
            {restProps.id === 'facebook' && <AltIcon><FaFacebook /></AltIcon>}
            {restProps.id === 'google' && <AltIcon><FaGoogle /></AltIcon>}
        </>
    )
}