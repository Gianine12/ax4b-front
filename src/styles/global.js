import styled, { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  *{
    font-family: 'Roboto', 'sans-serif';
    font-weight: 400;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    overflow-y: scroll;
    margin: 0;
    padding: 0;

    display: flex;
    flex-direction: column;
    align-items: center;

    background-color: #F1F1F1;
    h1 {
      text-align: center;
    }
  }
`;

export const Input = styled.input`
  margin: 5px;
  border-radius: 5px;
  padding: 5px;
  color: #000000;
  border: 1px solid;
  font-size: 15px;
  width: 350px;
  height: 40px;
  box-shadow: #6A7076 5px 5px;
  ::placeholder {
    color: #D2D3E7;
  }

`;

export const Button = styled.button`
  width: 200px;

  border: 1px solid #000000;
  background-color: #01277B;
  color: #ffffff;

  

  font-size: 15px;
  border-radius: 20px;
  margin: 5px;
  padding: 5px;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;

  box-shadow: #6A7076 5px 5px;
  
  :hover {
    background-color: #507FE7;
    color: #ffffff;
    border: 1px solid #ffffff;
  }
`;

export const Formulario = styled.form`
  border: 1px solid #000000;
  border-radius: 10px;
  padding: 10px;
  margin: 10px 10px 10px 50px;
  width: 90%;
  height: auto;
  display: flex;
  flex-wrap: wrap;
  box-shadow: #6A7076 5px 5px;
  /* justify-content: center; */
`;

export const Principal = styled.div`
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  background-color: #ffffff;

  margin: none;


  width: 90vw;
  height: 100%;
  min-height: 100vh;

  h1 {
    margin: 15px 0;
  }
`;