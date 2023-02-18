import styled from 'styled-components'

export const Nav = styled.nav`
  background-color: #5D60CD;
  overflow: hidden;
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    text-align: center;
    color: #ffffff;
    font-size: 40px;
    font-weight: 900;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  }
  
  div {
    padding: 5px 20px;
    display: flex;
    text-align: center;
    justify-content: center;
    border-radius: 20px;

    div:hover {
    background-color: #000000;
  }

  a {
    font-size: 20px;
    color: #ffffff;
  }

  a:link {
    text-decoration: none;
  }
}
`