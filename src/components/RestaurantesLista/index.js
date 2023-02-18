import { useState, useEffect } from 'react';
import axios from 'axios';
import { Table } from '../UsuarioLista/style';
import { Rating } from '@mui/material';

const RestauranteLista = () => {
  const [rest, setRest] = useState([])

  const getRest = async() => {
    axios.get('http://localhost:8080/api/restaurantes')
    .then((result) => {
      console.log(result)
      setRest(result.data);
    })
    .catch((e) => {
      console.error(e)
    })
  }

  useEffect(() => {
    getRest();
  },[])

  return (
    <div>
      {/* <NavBar/> */}
      <h1>Restaurantes</h1>
      <Table>
        <thead>
          <tr>
            <th>Restaurante</th>
            <th>Avaliação</th>
          </tr>
        </thead>
        <tbody>
          {rest.map((item) =>{
            return (
              <tr key={item.id}>
                <td>{item.name}</td>
                <td>
                  <Rating
                    name='stars'
                    value={item.stars}
                    readOnly
                  />
                </td>
              </tr>
            )
          })}
        </tbody>
      </Table>
    </div>
  );
}

export default RestauranteLista;