import styles from '@/app/styles/common.module.css'
import Image from 'next/image'
import Link from 'next/link'


const MovieCard =async (curElem) => {
    const {id,type, title, synopsis} = curElem.jawSummary
    await new Promise(resolve => setTimeout(resolve, 2000));
  return (
    <>
    <div className={styles.card}>
      <div className={styles.card_image}>
         <Image src={ curElem.jawSummary.backgroundImage.url} alt={title} height={200} width={260}/>
      </div>
      <div className={styles.card_data}>
        <h2>{title.substring(0,18)}</h2>
        <p>{synopsis.substring(0,66)}...</p>
        <Link href={`/movie/${id}`}>
          <button>Read More</button>
        </Link>
      </div>
    </div>
    </>
  )
}

export default MovieCard