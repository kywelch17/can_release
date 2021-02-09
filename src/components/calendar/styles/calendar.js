import styled, { css } from 'styled-components/macro';

export const Container = styled.div`
  margin-top: 20px;
  width: 80%;
  overflow-x: auto;
  overflow-y: auto;
  display: grid;
  font-family: "Verdana", sans-serif;
  align-items: center;
  justify-content: center;
`;

export const Frame = styled.div`
  width: 100%;
  align-items:center;
  justify-content:center;
  border: 1px solid lightgrey;
  box-shadow: 2px 2px 2px #646E78;
  background-color:#8D98A7
`;

export const Header = styled.div`
  font-size: 24px;
  font-weight: bold;
  padding: 10px 10px 5px 10px;
  display: flex;
  justify-content: space-between;
  background-color: #646E78;
`;

export const Button = styled.div`
  cursor: pointer;
`;

export const Body = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
`;

export const Day = styled.div`
  width: 14.07%;
  height: 120px;
  display: flex;
  //border-top: .5px solid #000;
  border-right: .5px solid #000;
  border-bottom: .5px solid #000;
  
  //align-items: center;
  //justify-content: center;
  cursor: pointer;

  &:nth-child(7n+1){border-left:.5px solid #000;}

  //&:nth-child(even) {border: .5px solid #000;}
  &:nth-child(-n+7) {height: 50px; align-items: center; justify-content: center; }

  ${props =>
    props.isToday &&
    css`
      //border: 2px solid #646E78;
      background-color: lightgray;
    `}

  ${props =>
    props.isSelected &&
    css`
      background-color: #646E78;
    `}
`;