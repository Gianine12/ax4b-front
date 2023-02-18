import { useState, useEffect } from 'react';
import axios from 'axios';
import NavBar from "../../components/NavBar";
import { Button, Formulario, Input, Principal } from '../../styles/global';
import { Table } from '../../components/UsuarioLista/style'
import { Labels, Form, DivInline, Winner } from './style';
import Swal from 'sweetalert2'
import { Rating } from '@mui/material';

const Home = () => {
  const [rest, setRest] = useState([]);
  const [voto, setVoto] = useState(false);
  const [tipRadio, setTipRadio] = useState('nome');
  const [user, setUser] = useState({});
  
  const onChangedVoto = (id) => {
    setVoto(id);
    console.log(id)
  }

  const [ranking, setRanking] = useState([]);

  const compare = (a,b) =>{
    // console.log(a,b)
    if(a.count < b.count) return -1;
    if(a.count > b.count) return 1;
    return 0
  }

  const getVotacao = async() => {
    axios.get('http://localhost:8080/api/ranking')
    .then((result) => {
      let temp = result.data.sort(compare).reverse();
      console.log(temp)
      setRanking(temp);
    })
    .catch((e) => {
      console.error(e)
    })
  }

  useEffect(() => {
    getVotacao();
  },[])

  const getRest = async() => {
    axios.get('http://localhost:8080/api/restaurantes')
    .then((result) => {
      setRest(result.data);
    })
    .catch((e) => {
      console.error(e)
    })
  }

  const SubmitVoto = (e) => {
    e.preventDefault()
    let obj = {
      ...user,
      restaurante_id: voto
    }

    axios.post('http://localhost:8080/api/restaurante_votado', obj)
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

  useEffect(() => {
    getRest();
  },[])

  return (
    <Principal>
      <NavBar/>
      <h1>Faça sua votação</h1>
    
      {/* <div style={{border: "1px solid black", width: "89%", height: "150px", boxShadow: "#6A7076 5px 5px", borderRadius: "10px", padding: "10px", margin: "10px auto"}}>

      </div> */}

      <DivInline>
        <Form onSubmit={SubmitVoto}>
          <div>
            <Labels>
              <div>
                <label>ID do usuário</label>
                <input name='tipEnv' id="id" onChange={(e) => setTipRadio(e.target.id)} type='radio'/>
              </div>
              <div>
                <label>Nome do usuário</label>
                <input name='tipEnv' id="nome" onChange={(e) => setTipRadio(e.target.id)} type='radio'/>
              </div>
            </Labels>
            <div>
              { tipRadio === 'nome' ?
                <div>
                  <Input type='text' onChange={(e) => setUser({nome: e.target.value})} placeholder='Nome do usuário'/>
                </div>
                :
                <div>
                  <Input type='number' onChange={(e) => setUser({id: e.target.value})} placeholder='Id do usuário'/>
                </div>
              }
              <div>
                <Button type='submit'>Votar</Button>
              </div>
            </div>

          </div>  
        </Form>

        {ranking.length > 0 
          ?
          <Winner>
            <h1>Primeiro colocado</h1>
            <div>
              <h2>Restaurante: {ranking[0].name}</h2>
              <h3>
                Pontuação: 
                <Rating
                  value={ranking[0].stars}
                  readOnly
                />
              </h3>
              <h3>Votos: {ranking[0].count}</h3>
            </div>
          </Winner>
          :
          <></>
        }
      </DivInline>

      <Table style={{marginTop: "50px"}}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Restaurante</th>
            <th>Pontuação</th>
            <th>Voto</th>
          </tr>
        </thead>
        <tbody>
          {rest.map((item) =>{
            return (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>
                  <Rating
                    value={item.stars}
                    readOnly
                  />
                </td>
                <td>
                  <input type="radio" onChange={() => onChangedVoto(item.id)} name='voto'/>
                </td>
              </tr>
            )
          })}
        </tbody>
      </Table>
      
    </Principal>
  );
}

export default Home;