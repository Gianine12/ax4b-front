import NavBar from "../../components/NavBar";
import { Principal } from "../../styles/global";
import axios from 'axios';
import { useEffect, useState } from "react";
import { Table } from "../../components/UsuarioLista/style";
import { Rating } from "@mui/material";
import api from "../../service/api";

const Ranking = () => {
  const [ranking, setRanking] = useState([]);

  const compare = (a,b) =>{
    // console.log(a,b)
    if(a.count < b.count) return -1;
    if(a.count > b.count) return 1;
    return 0
  }

  const getVotacao = async() => {
    api.get('ranking')
    .then((result) => {
      let temp = result.data.sort(compare).reverse()
      setRanking(temp);
    })
    .catch((e) => {
      console.error(e)
    })
  }

  useEffect(() => {
    getVotacao();
  },[])

  return (
    <Principal>
      <NavBar/>
      <h1>Ranking</h1>
      <Table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Restaurante</th>
            <th>Avaliação</th>
            <th>Votos</th>
          </tr>
        </thead>
        <tbody>
          {ranking.map((item) => {
            return (
              <tr key={item.id}>
                <td>{item.restaurant_id}</td>
                <td>{item.name}</td>
                <td>
                  <Rating
                    name='stars'
                    value={item.stars}
                    readOnly
                  />
                </td>
                <td>{item.count}</td>
              </tr>
            )
          })} 
        </tbody>
      </Table>
    </Principal>
  );
}

export default Ranking;