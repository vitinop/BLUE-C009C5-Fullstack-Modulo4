import './Footer.css';
import FacebookLogo from '../imgs/icons/facebooklogo.png';
import TwitterLogo from '../imgs/icons/twitterlogo.png';
import SteamLogoFooter from '../imgs/footerLogoSteam.png';
import ValveLogoFooter from '../imgs/footerLogoValve.png';
function Footer() {
  return (
    <footer>
      <div className="recommendations-container">
        <div className="recommendations">
          <h1>Em busca de recomendações?</h1>
         
          <h4>Inicie a sessão para ver mais recomendações personalizadas</h4>
          <button type="button" name="button">
          Iniciar sessão
          </button>
          <h4>
            ou <span className="bold">cadastre-se</span> no Steam gratuitamente
          </h4>
        </div>
      </div>
      <div className="legal-container">
        <div className="legal">
          <div className="legal-top">
            <div className="footer_valve">
              <img
                src={ValveLogoFooter}
                alt="Valve Software"
                border="0"
              />
            </div>
            <div className="legal-top-text">
              <hr/>
              <p>
              © 2021 Valve Corporation. Todos os direitos reservados. Todas as marcas são propriedade dos seus respectivos donos nos EUA e em outros países.
              IVA incluso em todos os preços onde aplicável.   
              </p>
              <a href="#">Política de Privacidade  </a>
              <a href="#">Termos Legais </a>
              <a href="#">Acordo de Assinatura do Steam</a>
              <a href="#">Reembolsos</a>
              <a href="#">Cookies</a>
            </div>
            <img
              src={SteamLogoFooter}
              alt="Steam Software"
              border="0"
            />
          </div>
          <hr />
          <div className="legal-bottom">
            <a href="#">Sobre a Valve</a>
            <a href="#">Empregos</a>
            <a href="#">Steamworks</a>
            <a href="#">Distribuição no Steam</a>
            <a href="#">Vales-presente </a>
            <a href="https://www.facebook.com/Steam"><img src={FacebookLogo}/>Steam</a>
            <a href="https://twitter.com/steam"><img src={TwitterLogo}/>@steam</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
