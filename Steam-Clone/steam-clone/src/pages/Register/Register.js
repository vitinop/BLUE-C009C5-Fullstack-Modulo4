import './Register.css';

export default function Register() {

  return(
    <div className='register'>
      <div className='register-container'>
        <h2>Criar uma conta Steam</h2>
        <form className='register-form'>
          <label>Nome</label>
          <input type='text' required/>

          <label>Nickname</label>
          <input type='text' required/>

          <label>Endereço de e-mail</label>
          <input type='email' required/>

          <label>Senha</label>
          <input type='password' required/>

          <label>Confirmar senha</label>
          <input type='password' required/>

          <div className='terms'>
            <input type='checkbox' placeholder='wedewdwed' required />
            <label>Eu concordo com os termos do <a href='https://store.steampowered.com/subscriber_agreement/?snr=1_44_44_'>Acordo de usuário da conta Steam</a> e confirmo que li a <a href='https://store.steampowered.com/privacy_agreement/?snr=1_44_44_'>Política de privacidade da Nintendo</a>.</label>
          </div>
          
          <div className='register-btn'>
            <input type='submit' value='Continuar' />
          </div>
        </form>
      </div>
    </div>
  )
}