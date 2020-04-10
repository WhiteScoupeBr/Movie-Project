import React,{useState} from 'react';
import {useSpring,animated} from 'react-spring';
import './styles.css';
import Header from '../Header'
import api from '../../services/api';
import Axios from 'axios';


export default function Search(){

    const [movies,setMovies]= useState([]);
    const [titleAux, setTitleAux] = useState('');


    
    const [idUser]=useState(localStorage.getItem('idUserAux'));
    
    const fade = useSpring({ opacity: 1, marginTop:0 ,from: { opacity: 0, marginTop:-300 } });

    async function handleAdd(imbd){
        
        await Axios.get('http://www.omdbapi.com/?i='+imbd+'&apikey=126b5b34')
            .then(async (response)=>{
                console.log(response);
                const data ={
                    title:response.data.Title,
                    description:response.data.Plot,
                    genre:response.data.Genre,
                    date:response.data.Released,
                    actors:response.data.Actors,
                    url:'',
                    img:response.data.Poster,
                    idUser,
                    };
                    
                
                try{
                    await api.post('movies',data);
                    alert(`Filme cadastrado com sucesso`);
                }catch(err){
                    console.warn("Não foi possível cadastrar filme");
                };
            })
            .catch((err)=>{
                console.warn(err);
            });
        }

     
    
    
    async function handleSearch(e){
        e.preventDefault();

        if(!titleAux){
            alert("Insira um título de filme");
        }else{
            try{
                await Axios.get('http://www.omdbapi.com/?s='+titleAux+'&apikey=126b5b34')
                .then((response)=>{
                if(response.data.Response==="False"){
                    alert('Filme não econtrado, tente novamente');
                }
                else{
                    setMovies(response.data.Search);
                }
            }).catch((err)=>{
                console.warn(err);
                });
            }catch(err){
                alert('Filme não econtrado');
            }
            
        }
        
        
    }


    return (

        <div>
            <Header/>

            <div className="container">
                    <h1 className="findH1">Digite o Título do Filme </h1>
                    <h1 className="findH12">(em Inglês)</h1>
                <form onSubmit={handleSearch}>
                    <div className="findInput">
                       <input type="text" placeholder="Filme"
                    value={titleAux}
                    onChange={e=>setTitleAux(e.target.value)}
                    />
                    <button type="submit">Buscar</button>
                    </div>
                    
                </form>
            </div>
            
            <ul className="findUl">
                {movies.map(movieApi=>{
                    
                    return (
                            <animated.div style={fade}>
                                <li className="findLi" key={movieApi.imdbID} >
                                    
                                    <div className="findAll">
                                        <img className="findImg" src={movieApi.Poster} alt="Poster"/>
                                        {<br/>}{<br/>}
                                          <strong className="findStrong"> {movieApi.Title} </strong>
                                          
                                         
                                    </div>
                                    {<br/>}{<br/>}
                                     <button onClick={()=>handleAdd(movieApi.imdbID)}>Adicionar</button>
                                </li> 
                            </animated.div>
                    );
                })
                }
            </ul>
        </div>
    );
}