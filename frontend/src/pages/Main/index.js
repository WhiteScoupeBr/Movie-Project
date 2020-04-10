import React,{useState} from 'react';
import {useHistory,Link} from 'react-router-dom';
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
            <div className="center">
                
                
                <div className="container">
                    <h1 className="mainTitle" >Movie Catalog</h1>
                    <h1>Login</h1>
                <form onSubmit={handleLogin}>
                    <div className="inputdiv">
                       <input type="text" placeholder="Usuário"
                    value={user}
                    onChange={e=>setUser(e.target.value)}
                    />
                    <input type="password" placeholder="Senha"
                    value={password}
                    onChange={e=>setPassword(e.target.value)}
                    /> 
                    </div>
                    
                    <button type="submit">Entrar</button>
                    <Link to ="/userRegister">
                        <button> Cadastrar</button>
                    </Link>
                </form>

            </div>
            </div>
    );
}