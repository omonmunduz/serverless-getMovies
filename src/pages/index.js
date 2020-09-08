import React,{ useState, useEffect} from 'react';
import axios from 'axios';
import styles from './style.module.css';

import Form from '../components/form';



export default () => {
    const [ movies, setMovies ] = useState(null);

    useEffect(()=>{
        axios('/api/movies').then((res)=> setMovies(res.data))
          
    },[])
    

    if(!movies){
        return <h1 className = {styles.failed}>Failed to load data</h1>
    }

    return (
        <>
            <header><h1>DMDB</h1></header>
            <Form/>
            <main>
                <div className = {styles.movies}>
                    {movies.map(movie => {
                        return (
                            <div className = {styles.movie}>
                                <img src = {movie.poster} alt = {movie.title} className = {styles.poster} />
                                <h3 className = {styles.heading}>{movie.title}</h3>
                                <p className = {styles.tagline}>{movie.tagline}</p>
                                <h5 className = {styles.ratings}>View Ratings</h5>
                                <ul>
                                    <li>{movie.scores.map(score => {
                                        const source = score.Source === 'Internet Movie Database' ? 'IMDb' : score.Source
                                        return(
                                            <>
                                                <span className = {styles.score}>{source}: {score.Value}</span>:
                                            </>
                                        )
                                    })}</li>
                                </ul>
                            </div>
                        )
                    })}
                </div>
            </main>
            <footer><h1>DMDB</h1></footer>
        </>
    );
};