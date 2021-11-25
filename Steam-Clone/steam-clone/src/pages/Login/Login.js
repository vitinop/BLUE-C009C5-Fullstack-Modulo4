import './Login.css';

export default function Login() {

  return (
    <div className='login'>
      <h2 className='login-title'>Iniciar-sessão</h2>
      <div className='login-container'>
        
        <form className='login-form'>
        
          <input type='text' placeholder='Nome de usuário Steam ou e-mail' required/>
      
          <input type='password' placeholder='Senha' />
          <div className='login-ok'>
            <a href='!#'>
              <span>Esqueceu sua senha?</span>
            </a>
            <input type='submit' value='Fazer login' />
          </div>
        </form>
        <div className='login-create'>
          <span>Ainda não possui uma conta?</span>
          <a className='btn-create' href='/register'>Criar uma conta Steam</a>
        </div>
      </div>
    </div>
  )
}