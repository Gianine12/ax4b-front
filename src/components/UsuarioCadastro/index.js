import NavBar from "../../components/NavBar";
import axios from "axios";
import { useState } from "react";
import { Button, Formulario, Input, Principal } from "../../styles/global";
import Swal from "sweetalert2";
import api from "../../service/api";

const UsuarioCadastro = () => {

  const [ value, setValue] = useState({});

  const onChanged = (event) => {
    setValue(old => ({...old, [event.target.name]: event.target.value}))
  };

  const handlerForm = async(e) => {
    // e.preventDefault()
    api.post("usuario/create", value).
    then((response) => {
      Swal.fire({
        icon: response.data.icon,
        title: response.data.title,
        text: response.data.msg
      })
    })
    .catch((error) => {
      Swal.fire({
        icon: 'error',
        title: "Erro",
        text: "Ocorreu um problema."
      })
    });
  }

  return (
    <div>
      {/* <NavBar/> */}
      <h1>Cadastro de Usuário</h1>
      <Formulario onSubmit={handlerForm} >
        <div>
          <Input onChange={onChanged} placeholder="Nome Completo" name="name" id="name" type="text"/>
        </div>
        <div>
          <Input onChange={onChanged} placeholder="E-mail" name="email" id="email" type="email"/>
        </div>
        <div>
          <Input onChange={onChanged} placeholder="Setor" name="setor" id="setor" type="text"/>
        </div>
        <div >
          <Button type="submit" >Cadastrar</Button>
        </div>
      </Formulario>
    </div>
  );
}

export default UsuarioCadastro;