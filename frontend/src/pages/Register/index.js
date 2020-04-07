import React,{useState} from 'react';

import './styles.css';
import Header from '../Header';
import api from '../../services/api';


export default function Register(){

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [genre, setGenre] = useState('');
    const [date, setDate] = useState('');
    const [actors, setActors] = useState('');
    const [url, setUrl] = useState('');
    
    async function registrar(e){
        e.preventDefault();

        const data ={
        title,
        description,
        genre,
        date,
        actors,
        url,
        };

        const response = await api.post('movies',data);

        alert(`Id do filme cadastrado: ${response.data.id}`)
    }
    return (
        <div className="wrap">
            <div className="head">
                <Header/>
            </div>
            <div className="form">

                <section>
                    <h1>Insira os dados do filme:</h1>
                </section>
                <form onSubmit={registrar}>
                    
                    <input placeholder="Título" type="text"
                    value={title}
                    onChange={e=>setTitle(e.target.value)}
                    />
                    <textarea placeholder="Descrição" 
                    value={description}
                    onChange={e=>setDescription(e.target.value)}
                    />
                    <input placeholder="Gênero" type="text"
                    value={genre}
                    onChange={e=>setGenre(e.target.value)}
                    />
                    <input placeholder="Data de Lançamento" type="text"
                    value={date}
                    onChange={e=>setDate(e.target.value)}
                    /> 
                    <input placeholder="Atores" type="text"
                    value={actors}
                    onChange={e=>setActors(e.target.value)}
                    />
                    <input placeholder="URL do Trailer" type="text"
                    value={url}
                    onChange={e=>setUrl(e.target.value)}
                    />
                    <button className="button" type="submit">Enviar</button>
                </form>
            </div>
        </div>
    );
}