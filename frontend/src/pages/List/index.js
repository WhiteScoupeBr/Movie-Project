import React,{useEffect,useState} from 'react';
import {useSpring,animated} from 'react-spring';
import './styles.css';
import Header from '../Header'
import {useHistory} from 'react-router-dom';
import api from '../../services/api';
 
export default function List(){

    const [movies,setMovies]= useState([]);
    const idAux = localStorage.getItem('idUserAux');
    const fade = useSpring({ opacity: 1, marginTop:0 ,from: { opacity: 0, marginTop:-300 } });
    const props = useSpring({ opacity: 1, from: { opacity: 0} });
    const history = useHistory();

        useEffect(()=>{
        api.get('movies',{
            headers:{
                Authorization: idAux,
            }
        }).then(response=>{
            setMovies(response.data);
        })
        },[idAux]);
    
   
    function handleEdit(movieDataAux){
        
        localStorage.setItem('movieData',JSON.stringify(movieDataAux));
        history.push('/movieupdate');
    }

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

            <animated.h1 style={props} className="listH1">Filmes</animated.h1>
            <ul className="listUl">
                {movies.map(movieAux=>{
                    return (
                            <animated.div style={fade}>
                                <li className="listLi" key={movieAux.id} >
                                    
                                    <div className="listAll">
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
                                        <button className="listB" onClick={()=>handleEdit(movieAux)}>Editar</button>
                                        <button className="listB" onClick={()=>handleDelete(movieAux.id)}>Deletar</button>
                                        
                                        
                                    </div>
                                    <div className="divImg"> 
                                        <img className="listImg" src={movieAux.img} alt="Poster"/>
                                    </div>
                                </li> 
                            </animated.div>
                        
                    );
                })}
            </ul>
            
        </div>
    );
}