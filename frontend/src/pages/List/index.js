import React,{useEffect,useState} from 'react';

import './styles.css';
import Header from '../Header'
import api from '../../services/api';
 
export default function List(){

    const [movies,setMovies]= useState([]);
    const idAux = localStorage.getItem('idUserAux');

        useEffect(()=>{
        api.get('movies',{
            headers:{
                Authorization: idAux,
            }
        }).then(response=>{
            setMovies(response.data);
        })
        },[idAux]);
    
   

    async function handleDelete(idMovie){

        try{
            await api.delete(`movies/${idMovie}`);
            setMovies(movies.filter(movieAux => movieAux.id!==idMovie));
        }catch(err){
            alert('Não foi possível deletar');
        }
    }
    return (
        <div className="wrap">
            <div className="head">
                <Header/>
            </div>

            <h1>Filmes</h1>
            <ul>
                {movies.map(movieAux=>{
                    return (
                        <li key={movieAux.id} >
                            <strong>Título</strong>
                            <p>{movieAux.title}</p>
                            <strong>Descrição</strong>
                            <p> {movieAux.description} </p>
                            <strong>Gênero</strong>
                            <p> {movieAux.genre} </p>
                            <strong>Data de Lançamento</strong>
                            <p> {movieAux.date} </p>
                            <strong>Atores</strong>
                            <p> {movieAux.actors} </p>
                            <strong>Trailer</strong>
                            <a className="listA" href={movieAux.url}> Ir para Link </a>
                            <br/>
                            <button onClick={()=>handleDelete(movieAux.id)}>Deletar</button>
                        </li>
                    );
                })}
            </ul>
            
        </div>
    );
}