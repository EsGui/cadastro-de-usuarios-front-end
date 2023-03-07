import { useContext } from 'react';
import myContext from '../../Context/myContext';
import './RegisterUserComponent.css';

function RegisterUserComponent() {
  const {
    functionRegisterUsersEmail,
    functionRegisterUsersPassword,
    functionRegisterUsersConfirmPassword,
    functionButtonUsers,
    functionDeleteUser,
    listUsers
  } = useContext(myContext);

  console.log(listUsers)

  return (
    <div className="DivFatherRegisterUserComponent">
        <div className="DivSonRegisterUserComponent">
            <input type="email" placeholder="Digite seu email" onChange={ functionRegisterUsersEmail } />
            <input type="password" placeholder="Crie uma senha" onChange={ functionRegisterUsersPassword } />
            <input type="password" placeholder="Confirme sua senha" onChange={ functionRegisterUsersConfirmPassword } />
            <button type="button" onClick={ functionButtonUsers }>Registrar usuário</button>
        </div>
        <div className="DivSonRegisterUserComponent1">
          <p>As contas criadas apareção aqui</p>
            {
              listUsers.map(({
                email,
                password,
              }) => (
                <div className="DivSpecificAccount">
                    <p>{ email }</p>
                    <p>{ password }</p>
                    <button type="button" name={ email } onClick={ functionDeleteUser }>Deletar</button>
                </div>
              ))
            }
        </div>
    </div>
  )
}

export default RegisterUserComponent;