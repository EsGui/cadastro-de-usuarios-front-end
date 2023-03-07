import './RegisterUserComponent.css';

function RegisterUserComponent() {
  return (
    <div className="DivFatherRegisterUserComponent">
        <div className="DivSonRegisterUserComponent">
            <input type="email" placeholder="Digite seu email" />
            <input type="password" placeholder="Crie uma senha" />
            <input type="password" placeholder="Confirme sua senha" />
            <button type="button" >Registrar usuário</button>
        </div>
        <div className="DivSonRegisterUserComponent1">
          <p>As contas criadas apareção aqui</p>
        </div>
    </div>
  )
}

export default RegisterUserComponent;