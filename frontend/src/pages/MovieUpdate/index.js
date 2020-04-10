import React,{useState} from 'react';
import {useHistory} from 'react-router-dom';
import {useSpring,animated} from 'react-spring';
import './styles.css';
import Header from '../Header';
import api from '../../services/api';

export default function MovieUpdate(){

    
    let aux = JSON.parse(localStorage.getItem('movieData'));
    const [title, setTitle] = useState(aux.title);
    const [description, setDescription] = useState(aux.description);
    const [genre, setGenre] = useState(aux.genre);
    const [date, setDate] = useState(aux.date);
    const [actors, setActors] = useState(aux.actors);
    const [url, setUrl] = useState(aux.url);
    const [idUser]=useState(aux.idUser);
    const [img,setImg]=useState(aux.img);

    const history = useHistory();

    const fade = useSpring({ opacity: 1,  from: { opacity: 0, } });

    async function handleEdit(e){
        e.preventDefault();
        const data ={
            title,
            description,
            genre,
            date,
            actors,
            url,
            img,
            idUser,
            };
        console.log(data.title);
        try{
            await api.put(`movies/${aux.id}`,data);
            history.push('/list');
        }catch(err){
            alert('Não foi possível deletar');
        }
    }

    return (
        <div className="wrap">
            <div className="head">
                <Header/>
            </div>
            <div className="form">
            
                <div>
                    <section className="movieSec">
                    <animated.h1 className="movieData" style={fade}>Altere os dados do filme:</animated.h1>
                    </section>
                </div>
                
                
           
                <animated.form style={fade} onSubmit={handleEdit}>
                    
                    <input className="registroOnly" placeholder="Título" type="text"
                    value={title}
                    onChange={e=>setTitle(e.target.value)}
                    />
                    <textarea  className="registroOnly" placeholder="Descrição" 
                    value={description}
                    onChange={e=>setDescription(e.target.value)}
                    />
                    <input className="registroOnly" placeholder="Gênero" type="text"
                    value={genre}
                    onChange={e=>setGenre(e.target.value)}
                    />
                    <input className="registroOnly" placeholder="Data de Lançamento" type="text"
                    value={date}
                    onChange={e=>setDate(e.target.value)}
                    /> 
                    <input className="registroOnly" placeholder="Atores" type="text"
                    value={actors}
                    onChange={e=>setActors(e.target.value)}
                    />
                    <input className="registroOnly" placeholder="URL do Trailer" type="text"
                    value={url}
                    onChange={e=>setUrl(e.target.value)}
                    />
                    <input className="registroOnly" placeholder="URL da Imagem" type="text"
                    value={img}
                    onChange={e=>setImg(e.target.value)}
                    />
                    <button className="button" type="submit">Enviar</button>
                </animated.form>
            </div>
        </div>
    );
}