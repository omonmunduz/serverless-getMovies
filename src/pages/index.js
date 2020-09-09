import React,{ useState, useEffect} from 'react';
import axios from 'axios';
import styles from './style.module.css';

import Form from '../components/form';
import Movies from '../components/movies';



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
                <Movies movies = {movies}/>
            </main>
            <footer><h1>DMDB</h1></footer>
        </>
    );
};