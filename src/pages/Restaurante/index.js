import { useNavigate } from "react-router-dom";
import NavBar from "../../components/NavBar";
import { Principal } from "../../styles/global";
import RestauranteCadastro from "../../components/RestauranteCadastro";
import RestauranteLista from "../../components/RestaurantesLista";

const Restaurante = () => {
  const navigate = useNavigate()

  return (
    <Principal>
      <NavBar/>
      <RestauranteCadastro/>
      <br/><br/><br/>
      <RestauranteLista/>
    </Principal>
  );
}

export default Restaurante;