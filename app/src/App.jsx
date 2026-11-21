import './App.css'
import './tipografia.css'

function App() {
  return (
    <header>
      <nav>
        <div id='logo'></div>
        <ul id='esquerda'>
          <li><a href='#'>INÍCIO</a></li>
          <li><a href='#'>SERVIÇOS</a></li>
          <li><a href='#'>AGENDAR</a></li>
          <li><a href='#'>SOBRE NÓS</a></li>
          <li><a href='#'>CONTATO</a></li>
        </ul>

        <ul id='direita'>
          <li><a id='criar-conta' href='#'>CRIAR CONTA</a></li>
          <ion-icon id='icon-user' name="person-outline"></ion-icon>
        </ul>
      </nav>

      <div id='chamada-texto'>
        <h1>Cuide da Saúde e Bem-Estar do seu Pet!</h1>
        <h3>Agende seu horário agora na PetCare.</h3>
        <a href='#'>Saiba Mais</a>
      </div>
    </header>
  )
}

export default App
