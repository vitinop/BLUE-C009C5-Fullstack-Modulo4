import './Header.css';
import Greylogo from '../imgs/greylogo.png';
function Header(){
    return (
        <header className="App-header">
        <header className="header-container">
        <div className="header">
        <div class="left-header">
            <img src={Greylogo} alt='Steam logo'/>
                
        <div className="header-links">
            <a href="#">LOJA</a>
            <a href="#">COMUNIDADE</a>
            <a href="#">SOBRE</a>
            <a href="#">SUPORTE</a>
        </div>
        
    </div>
    <div className="small-header">
        <img src="" alt=""/>
    </div>
    <div className="right-header">
        <button type="button"><i className="fas fa-download"></i> Instale o Steam</button>
        <a href="#">Iniciar sessão</a><a href="#">|</a>
        <a href="#"> Idioma <i className="fas fa-sort-down"></i></a>
    </div>
    </div>
    </header>
    </header>
    );
    }

export default Header;
