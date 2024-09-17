import './style.css'
import { useEffect,useState } from 'react'
import Trash from '../../assets/trash.svg'
import api from '../../services/api'

//useState=hooks estado e uma variavel que muda as coisas na tela 

function Home() {

  const [users,setUsers] = useState([])

  async function getUsers(){
    const usersFromapi = await api.get('/usuarios')
    setUsers(usersFromapi.data)
    
  }
useEffect(()=>{
  getUsers()
},[])

  return (

      <div className='container'>
        <form>
          <h1>Cadastro de Usuários</h1>
          <input placeholder='Nome' name='nome' type='text'/>
          <input placeholder='Idade' name='idade' type='number'/>
          <input placeholder='email' name='email' type='email'/>
          <button type='button'>Cadastrar</button>
        </form>

      {users.map(user=> (
          <div key={user.id} className='card'>
           <div>
             <p>Nome: <span>{user.name}</span></p>
             <p>Idade: <span>{user.age}</span></p>
             <p>Email: <span>{user.email}</span></p>
           </div>
           <button>
             <img src={Trash}/>
           </button>
         </div>
      ))}
      </div>
  )
}

export default Home
