import './Home.css'
import petCapa from '../../assets/Capa-inicio.webp'
import '../../components/layout/Tipografia.css'

function Home(){
    return (
        <div className='inicio-sessao'>
            <div className='inicio-container'>
                <div className='pets-img'>
                    <img src={petCapa} alt="Pets"/>
                </div>

                <div className='inicio-texto'>
                    <h1>Cuide da Saúde e Bem-Estar do seu Bichinho!</h1>
                    <p>Agende seu horário agora mesmo na PetCare.</p>
                    <a href='#sobre' className='saiba-mais'>Saiba +</a>
                </div>
            </div>
        </div>
    )
}

export default Home