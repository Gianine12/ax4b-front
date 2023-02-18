import NavBar from "../../components/NavBar";
import { Principal } from "../../styles/global";
import UsuarioCadastro from "../../components/UsuarioCadastro";
import UsuarioLista from "../../components/UsuarioLista";

const Usuario = () => {
  return (
    <Principal>
      <NavBar/>
      <UsuarioCadastro/>
      <br/><br/><br/>
      <UsuarioLista/>
    </Principal>
  );
}

export default Usuario;