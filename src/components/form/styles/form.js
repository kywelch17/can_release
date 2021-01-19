import styled from 'styled-components/macro';

export const Container = styled.div`
    display: flex;
    font-family: "Verdana", sans-serif;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    padding-bottom: 2.5rem;
`;

export const Base = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 50px 40px;
    color: #fff;
    background-color: #000;
    border-radius: 10px;

    @media (max-width: 796px) {
        padding: 30px 20px;
    }
`;

export const Title = styled.span`
    font-size: 36px;
    font-weight: bold;
    margin-bottom: 10px;

    @media (max-width: 796px) {
        font-size: 24px;
    }
`;

export const User = styled.select`
    justify-content: center;
    margin-bottom: 15px;
    width: 100%;
    outline: none;
    border: none;
    border-radius: 5px;
`;

export const Label = styled.label`
    font-size: 12px;
    margin-bottom: 5px;
    margin-top: 10px;
`;

export const Input = styled.input`
    border-top: none;
    border-right: none;
    border-left: none;
    outline: none;
    background-color: transparent;
    color: #fff;
    text-align: center;
    padding-bottom: 5px;
`;

export const Select = styled.div`
    display: inline;
`;

export const Submit = styled.button`
    width: 50%;
    height: 50%;
    margin-top: 24px;
    border-radius: 12px;
    outline: none;
    border: none;
    padding: 6px;

    &:hover {
        background-color: #aa9;
        cursor: pointer;
    }
`;

export const SubmitText = styled.span`
    font-size: 16px;
    text-decoration: none;
`;

export const Link = styled.a`
    text-decoration: none;
    margin-right: auto;
`;

export const Switch = styled.span`
    font-size: 10px;
    color: #fff;
    lettering-spacing: 0;
    text-decoration: none;
    white-space: normal;
    float: left;
    
    &:hover {
        color: #aa9;
        cursor: pointer;
    }
`;

export const Error = styled.ul`
    background-color: red;
    list-style: none;
    padding: 0 15px;
    font-size: 12px;
`;

export const Alt = styled.div`
    font-size: 24px;
    justify-content: center;
`;

export const AltText = styled.div`
    font-size: 18px;    
    margin: 18px;
`;

export const AltIcon = styled.i`
    margin: 12px 8px;
    font-size: 36px;
    color: #fff;

    &:hover {
        color: #aa9;
        cursor: pointer;
    }
`;