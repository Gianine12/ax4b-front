import { Link } from "react-router-dom";
import { Nav } from "./style";

const NavBar = () => {
  return (
    <Nav id="navbar">
      <h1>Restaurante do Dia</h1>
      <hr style={{width:'98%'}}/>
      <div>
        <div>
          <Link to='/'>Home</Link>
        </div>
        <div>
          <Link to='/usuario'>Usuários</Link>
        </div>
        <div>
          <Link to='/restaurante'>Restaurantes</Link>
        </div>
        <div>
          <Link to='/vencedor'>Vencedor</Link>
        </div>
        <div>
          <Link to='/ranking'>Ranking</Link>
        </div>
      </div>
    </Nav>
  );
}

export default NavBar;