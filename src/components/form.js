import React from 'react';
import styles from './form.module.css';

const Form = () => {

    async function handleSubmit (e) {
        e.preventDefault();
        const data = new FormData(e.target);

        await fetch('/api/add-movie',{
            method: 'POST',
            body: JSON.stringify({
                id: data.get('id'),
                title: data.get('title'),
                tagline: data.get('tagline'),
                poster: data.get('poster')
            })
        }).then(res =>{
            document.querySelector('.message').innerText = `Response: ${res.status} - ${res.statusText}`
        })
    }

    return (
        <>
            <p className = "message"></p>
            <form className = {styles.form} onSubmit = {handleSubmit}>
                <label htmlFor="id">ID
                    <input type='text' id = "id" name = 'id'/>
                </label>
                <label htmlFor="title">Title
                    <input type='text' id = "title" name = 'title'/>
                </label>
                <label htmlFor="tagline">Tagline
                    <input type='text' id = "tagline" name = 'tagline'/>
                </label>
                <label htmlFor="poster">Poster
                    <input type='text' id = "poster" name = 'poster'/>
                </label>
                <button className = {styles.submitBtn}>Submit</button>
            </form>
        </>
    )
};
export default Form;