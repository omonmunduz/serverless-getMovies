import React from 'react';
import styles from './movies.module.css';

const Movies  = ({movies}) => {
    return(
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
    )
};
export default Movies;