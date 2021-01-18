import styled from 'styled-components/macro';

export const Container = styled.div`
    display: flex;
    font-family: "Verdana", sans-serif;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
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
    margin-bottom: 24px;

    @media (max-width: 796px) {
        font-size: 24px;
    }
`;

export const Label = styled.label`
    font-size: 12px;
    margin-bottom: 10px;
    margin-top: 15px;
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

    &:focus {
        opacity: none;
    }
`;

export const Submit = styled.button`
    width: 50%;
    height: 50%;
    margin-top: 36px;
    border-radius: 12px;
    outline: none;
    border: 0;
    padding: 6px;

    &:hover {
        color: #fff;
        background-color: #000;
        border: 1px solid #fff;
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