import React,{useState} from 'react';
import {useSpring,animated} from 'react-spring';
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
    const [idUser]=useState(localStorage.getItem('idUserAux'));
    const [img,setImg]=useState('');
   
    const fade = useSpring({ opacity: 1,  from: { opacity: 0, } });

    

    async function registrar(e){
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
        console.log(data.idUser);
        try{
            const response = await api.post('movies',data);

            alert(`Id do filme cadastrado: ${response.data.id}`);
        }catch(err){
            console.warn("Não foi possível cadastrar filme");
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
                    <animated.h1 className="movieData" style={fade}>Insira os dados do filme:</animated.h1>
                    </section>
                </div>
            
                
           
                <animated.form style={fade} onSubmit={registrar}>
                    
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
                    <input className="registroOnly" placeholder="Imagem" type="text"
                    value={img}
                    onChange={e=>setImg(e.target.value)}
                    />
                    <button className="button" type="submit">Enviar</button>
                </animated.form>
            </div>
        </div>
    );
}