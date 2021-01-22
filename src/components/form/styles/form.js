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
    justify-content: center;
    padding: 50px 40px;
    color: #fff;
    background-color: #000;
    border-radius: 10px;
    box-shadow: 1px 2px 2px 1px #aa9;
`;

export const Sheet = styled.div`
    align-items: center;
    width: 100%;
`;


export const Input = styled.input`
    display: block;
    margin: 25px auto;
    outline: none;
    border-bottom: 1px solid #aa9!important;
    border-top: none;
    border-left: none;
    border-right: none;
    background-color: #000;
    color: #fff;
    padding-bottom: 3px;
    text-align: center;
    -webkit-transition: font-size 0.7s, margin 0.7s;
    position: inline-block;

    @media (min-width: 768px) {
        &:focus {
            font-size: 36px;
            margin: 45px 0;
            -webkit-transition: font-size 0.7s, margin 0.7s;
        }
    
        ::placeholder {
            color: #fff;
            opacity: 40%;
        }
    }
`;

export const Select = styled.select`
    margin: 10px auto 25px;
    display: block;
    padding: 0;
    border: none;
    position: none;
    outline: none;
    background-color: #000;
    color: #fff;
    border: .05px solid #fff;
    text-align: center;
`;

export const Title = styled.span`
    font-size: 36px;
    font-weight: bold;
    margin-bottom: 20px;
`;

export const Submit = styled.button`
    background-color: #fff;
    padding: 7px 17px;
    outline: none;
    border: none;
    border-radius: 10px;
    margin: 10px auto 25px;
    -webkit-transition: padding 0.7s, font-size 0.7s;

    &:hover {
        background-color: #aa9;
        cursor: pointer;
        padding: 14px 24px;
        font-size: 18px;
        -webkit-transition: padding 0.7s, font-size 0.7s;
    }
`;

export const Alternative = styled.div`
    align-items: center;
`;

export const AltTitle = styled.div`
    font-size: 18px;    
    margin: 18px;
`;

export const AltIcon = styled.i`
    margin: 12px 8px;
    font-size: 36px;
    color: #fff;
    -webkit-transition: font-size 0.7s;
    width: 100%;

    &:hover {
        color: #aa9;
        font-size: 52px;
        -webkit-transition: font-size 0.7s;
    }
`;