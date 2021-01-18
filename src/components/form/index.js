import React from 'react';
import { BsPersonFill, BsFillEnvelopeFill, BsFillLockFill} from 'react-icons/bs';

import { Container, Base, Title, Label, Input, Submit, SubmitText, Switch, Link, Error } from './styles/form';

export default function Form ({ children, ...restProps }) {
    return <Container {...restProps}>{ children }</Container>;
}

Form.Base = function FormBase ({ children, ...restProps }) {
    return <Base {...restProps}>{ children }</Base>
}

Form.Title = function FormTitle ({ children, ...restProps }) {
    return <Title {...restProps}>{ children }</Title>
}

Form.Label = function FormLabel ({ children, ...restProps }) {
    return <Label {...restProps}>{ children }</Label>
}

Form.Input = function FormInput ({ children, ...restProps }) {
    return <Input {...restProps}>{ children }</Input>
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
    )
}

Form.Submit = function FormSubmit ({ children, ...restProps }) {
    return (<Submit {...restProps}><SubmitText>{ children }</SubmitText></Submit>);
}

Form.Error = function FormError ({ children, ...restProps }) {
    return <Error {...restProps}>{ children }</Error>;
}