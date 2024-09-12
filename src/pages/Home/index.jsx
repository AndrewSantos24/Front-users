import './style.css'

function Home() {

  return (

      <div className='container'>
        <form>
          <h1>Cadastro de Usuários</h1>
          <input name='nome' type='text'/>
          <input name='idade' type='number'/>
          <input name='email' type='email'/>
          <button type='button'>Cadastrar</button>
        </form>

        <div>
          <div>
            <p>Nome:</p>
            <p>Idade:</p>
            <p>Email:</p>
          </div>
          <button>
            <img></img>
          </button>
        </div>

      </div>
  )
}

export default Home
