import { useState } from "react";
import { useNavigate, Link } from 'react-router-dom'
import './Cadastro.css'
import './Tipografia.css'

export function Cadastro(){
    const navegar = useNavigate();

    /* aqui foi usado useState pra cada vez q o user acessar o formulario (seja de login ou cadastro) ele vai começar vazio */
    const [dadosForm, setDadosForm] = useState({
        nome: '', email: '', telefone: '', senha: '', confirmarSenha: ''
    });

    /* semelhante daqui acima, como ainda não tem erro, vai começar vazio (ainda não implementei o erro la embaixo gnt, depois faço com o login) */
    const [erro, setErro] = useState('');

    const [carregando, setCarregando] = useState(false);

    const mudarHandle = (e) => {
        setDadosForm({...dadosForm, [e.target.name]: e.target.value});
    };

    const submitHandle = async (e) => {
        e.preventDefault();
        setErro('');
    

        if(dadosForm.senha != dadosForm.confirmarSenha){
            setErro('As senhas devem ser iguais!');
            return;
        }

        setCarregando(true);

        try{
            const response = await fetch('http://localhost:3000/usuarios', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    nome: dadosForm.nome,
                    email: dadosForm.email,
                    telefone: dadosForm.telefone
                })
            });

            const dadosJson = await response.json();

            if(!response.ok){
                throw new Error(dadosJson.message || 'Erro.');
            }

            alert('Você registrou-se com sucesso! Para continuar, faça login.');
            navegar('/login');
        }catch(err){
            setErro(err.message);
        }finally{
            setCarregando(false);
        }
    }

    return(
        <div className="autenticacao-container">
            <div className="autenticacao-card">
                <h2 className="autenticacao-titulo">Faça seu cadastro:</h2>
                <p className="autenticacao-subtitulo">Cadastre-se para agendar serviços e cuidados essenciais para seu animalzinho.</p>

                <form onSubmit={submitHandle} className="autenticacao-form">
                    <div className="inputs">
                        <label htmlFor="nome">Nome</label>
                        <input type="text" id="nome" name="nome" value={dadosForm.nome} onChange={mudarHandle} required></input>
                    </div>
                    <div className="inputs">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" name="email" placeholder="seuemail@email.com" value={dadosForm.email} onChange={mudarHandle} required></input>
                    </div>
                    <div className="inputs">
                        <label htmlFor="telefone">Telefone</label>
                        <input type="tel" id="telefone" name="telefone" placeholder="(34) 12345-7890" value={dadosForm.telefone} onChange={mudarHandle} required></input>
                    </div>
                    <div className="inputs">
                        <label htmlFor="senha">Senha</label>
                        <input type="password" id="senha" name="senha" value={dadosForm.senha} onChange={mudarHandle} required></input>
                    </div>
                    <div className="inputs">
                        <label htmlFor="confirmarSenha">Confirmar Senha</label>
                        <input type="password" id="confirmarSenha" name="confirmarSenha" value={dadosForm.confirmarSenha} onChange={mudarHandle} required></input>
                    </div>
                </form>
                <button type="submit" className="botaoCadastrar" disabled={carregando}>
                    {carregando ? 'Cadastrando...' : 'Criar Conta'}
                </button>
                <p className="autenticacao-footer">
                    Já é cadastrado? Entre já
                </p>
            </div>
        </div>
    )

}