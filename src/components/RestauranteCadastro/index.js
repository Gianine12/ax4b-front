import NavBar from "../../components/NavBar";
import axios from "axios";
import { Button, Formulario, Input, Principal } from "../../styles/global";
import { useState } from "react";
import Swal from "sweetalert2";
import { Rating } from "@mui/material";
import api from '../../service/api';

const RestauranteCadastro = () => {
  const [ value, setValue] = useState({});

  const onChanged = (event) => {
    setValue(old => ({...old, [event.target.name]: event.target.value}))
    console.log(value)
  };
  
  const handlerForm = (data) => {
    api.post(`restaurante/create`,value)
    .then((response) => {
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
      <h1>Cadastro de Restaurante</h1>
      <Formulario onSubmit={handlerForm} >
        <div>
          <Input onChange={onChanged} placeholder="Nome do Restaurante" name="name" id="name" type="text"/>
        </div>
        <div style={{display: "flex", alignItems: "center", justifyContent: "center", height: '40px', marginTop: "5px" ,border: '1px solid black', padding: "5px", textAlign: "center", boxShadow: "#6A7076 5px 5px", width:"350px", borderRadius: "5px"}}>
          <label>Avaliação</label>
          <Rating
            name='stars'
            onChange={onChanged}
            precision={0.5}
          />
        </div>
        <div>
          <Button type="submit">Cadastrar</Button>
        </div>
      </Formulario>
    </div>
  );
}

export default RestauranteCadastro;