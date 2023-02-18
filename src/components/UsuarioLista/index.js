import axios from 'axios';
import { useState, useEffect } from 'react';
import NavBar from '../../components/NavBar';
import { Table } from './style';
import { Principal } from '../../styles/global';

const UsuarioLista = () => {
  const [user,setUser] = useState([]);

  const getUsers = async() =>{
    axios.get('http://localhost:8080/api/usuarios')
    .then((result) => {
      setUser(result.data);
    })
    .catch((e) => {
      console.error(e)
    })
  }

  useEffect(() => {
    getUsers();
  },[])

  return (
    <div>
      {/* <NavBar/> */}
      <h1>Lista de Usuários</h1>
      <Table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Usuário</th>
            <th>E-mail</th>
            <th>Setor</th>
          </tr>
        </thead>
        <tbody>
          {user.map((item) =>{
            return (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.setor}</td>
              </tr>
            )
          })}
        </tbody>
      </Table>
    </div>
  );
}

export default UsuarioLista;