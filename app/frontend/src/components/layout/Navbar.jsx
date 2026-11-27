import { Link } from 'react-router-dom'
import './Navbar.css'
import './Tipografia.css'

function Navbar(){
    return (
        <header>
            <nav className="navbar">
                <div className="logo"></div>

                <ul className="esquerda">
                    <li><Link to='/'>Início</Link></li>
                    <li><a href='#servicos'>Serviços</a></li>
                    <li><a href='#agendar'>Agendar</a></li>
                    <li><a href='#sobre'>Sobre Nós</a></li>
                    <li><a href='#contato'>Contato</a></li>
                </ul>

                <ul className="direita">
                    <li><Link className="criar-conta" to='/cadastro'>Criar Conta</Link></li>
                    <div className="user-icon"></div>
                </ul>
            </nav>
        </header>
    )
}

export default Navbar