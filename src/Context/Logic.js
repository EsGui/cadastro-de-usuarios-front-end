import { useEffect, useState } from 'react';
import requestUsers from '../Services/RequestUsers';
import myContext from './myContext';

function Logic ({ children }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [listUsers, setListUsers] = useState([]);

    useEffect(() => {
        const request = async () => {
            requestUsers.getUsers().then((data) => {
                setListUsers(data.message)
            })
        };
        request()
    }, [])

    const functionRegisterUsersEmail = ({ target: { value } }) => setEmail(value);
    const functionRegisterUsersPassword = ({ target: { value } }) => setPassword(value);
    const functionRegisterUsersConfirmPassword = ({ target: { value } }) => setConfirmPassword(value);
    const functionButtonUsers = async () => {
        await requestUsers.registerUsers({
            email,
            password,
            confirmPassword
        })
        document.location.reload()        
    }

    const functionDeleteUser = async ({ target: { name } }) => {
        const email = name;
        await requestUsers.deleteUsers({
            email,
        });
        document.location.reload()
    }

    const obj = {
        functionRegisterUsersEmail,
        functionRegisterUsersPassword,
        functionRegisterUsersConfirmPassword,
        functionButtonUsers,
        functionDeleteUser,
        listUsers,
    };

    return (
        <myContext.Provider value={ obj }>
            { children }
        </myContext.Provider>
    )
}

export default Logic;
