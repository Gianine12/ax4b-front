import styled from 'styled-components'

export const Form = styled.form`
  border: 1px solid #000000;
  border-radius: 10px;
  padding: 10px;
  width: 40%;
  height: auto;
  display: flex;
  flex-wrap: wrap;
  box-shadow: #6A7076 5px 5px;
  justify-content: center;
  margin-left: 60px;

  min-width: 400px;
  max-width: 40%;
`;

export const Labels = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;

  div {
    margin: 10px 20px;
    display: flex;

    label {
      margin: 0 10px 0 0;
    }

  }
`;

export const DivInline = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-content: space-between;
`;

export const Winner = styled.div`
  border: 1px solid black;
  width: 40%;
  height: 150px;
  box-shadow: #6A7076 5px 5px;
  border-radius: 5px;
  padding: 2px;
  margin: 0 10px 0 100px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h1{
    color: #EFE62A;
    margin: 5px;
  }

  h3{
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;