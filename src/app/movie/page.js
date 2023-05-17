import Link from 'next/link'
import React from 'react'
import MovieCard from '../components/MovieCard'
import styles from '@/app/styles/common.module.css'

const Movie  = async() => {

  const url = process.env.RAPID_KEY
  const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '2cd4df8d43mshd7bad39f8f13836p1b4c15jsnad9022e874cc',
    'X-RapidAPI-Host': 'netflix54.p.rapidapi.com'
  }
}
const res = await fetch(url, options)
const data = await res.json()
const main_data = data.titles

  return (
    <div>
        <section className={styles.movieSection}>
          <div className={styles.container}>
            <h1>Series & Movies</h1>
            <div className={styles.card_section}>
            {
              main_data.map((curElem)=>{
                    return <MovieCard key={curElem.id} {...curElem}/>
              })
            }
            </div>
          </div>
      </section>
    </div>
    
  )
}

export default Movie