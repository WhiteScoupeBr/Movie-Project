import React,{useState} from 'react';
import {useHistory,Link} from 'react-router-dom';
import './styles.css';
import api from '../../services/api';

export default function Main(){

    const [user, setUser] = useState('');
    const [password,setPassword] = useState('');
    const history = useHistory();

    async function handleRegister(e){
        e.preventDefault();

        try{
            const response = await api.post('register',{user,password})
            
            alert(`Usuário: ${response.data.user} cadastrado com sucesso`);
            history.push('/');
            
        }catch(err){
            alert('Falha ao cadastrar, usuário já existe');
        }
    }

    return (
            <div className="center">
                
                
                <div className="container">
                    <h1>Cadastrar</h1>
                <form onSubmit={handleRegister}>
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
                    <Link to="/">
                        <button> Voltar</button>
                    </Link>
                    <button type="submit">Cadastrar</button>
                </form>

            </div>
            </div>
    );
}