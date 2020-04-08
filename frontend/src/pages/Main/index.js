import React,{useState} from 'react';
import {Link,useHistory} from 'react-router-dom';
import './styles.css';
import api from '../../services/api';

export default function Main(){

    const [user, setUser] = useState('');
    const [password,setPassword] = useState('');
    const history = useHistory();

    async function handleLogin(e){
        e.preventDefault();

        try{
            const response = await api.post('sessions',{user,password})
            localStorage.setItem('idUserAux',response.data.id);
            history.push('/list');
        }catch(err){
            alert('Falha ao iniciar a sessão');
        }
    }

    return (
        <div className="wrap">
            <form onSubmit={handleLogin}>
                <h1>Login</h1>
                <input type="text" placeholder="Usuário"
                value={user}
                onChange={e=>setUser(e.target.value)}
                />
                <input type="password" placeholder="Senha"
                value={password}
                onChange={e=>setPassword(e.target.value)}
                 />
                <button type="submit">Entrar</button>
            </form>
        </div>
    );
}