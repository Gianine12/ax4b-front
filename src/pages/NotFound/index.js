import { useNavigate } from "react-router-dom";
import NavBar from "../../components/NavBar";

const NotFound = () => {
  const navigate = useNavigate()

  return (
    <div>
      cade o botao
      <NavBar/>
      <button onClick={ () => {
        navigate('/')
      }} >Home</button>
    </div>
  );
}

export default NotFound;