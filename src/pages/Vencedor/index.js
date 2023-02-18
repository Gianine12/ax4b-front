import { useNavigate } from "react-router-dom";
import NavBar from "../../components/NavBar";
import { Principal } from "../../styles/global";

const Vencedor = () => {
  const navigate = useNavigate()

  return (
    <Principal>
      <NavBar/>
      <h1>pagina principal</h1>
    </Principal>
  );
}

export default Vencedor;