import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
         <a
            href="https://gosloto.co.za/"
          >
            <p>gosloto.co.za</p>
          </a>
        <div>
          <a
            href="https://lunchtimeprediction.com/"
          >
            <p>Lunchtime Prediction</p>
          </a>
        </div>
      </div>

      <div className={styles.grid}>
        <a
          href="#"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Digital Marketing <span>-&gt;</span>
          </h2>
          <p>We are a team of 51 developers that do the test, develop and pulish many blog. We are 
           highly experienced in the javascript and our create website are mentioned above.</p>
        </a>

        <a
          href="#"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Backlink Information <span>-&gt;</span>
          </h2>
          <p>Most the search console owners demands to put their website link to the most reputable
          blogs. So, we have linkback to many websites as well.!</p>
        </a>

        <a
          href="#"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Local SEO <span>-&gt;</span>
          </h2>
          <p>As we a full digital marketing company so we do local seo projects as well. We have served 500+ clients
          in the last 2 years. Google my business can help to get more traffic if you want work with local clients.</p>
        </a>

        <a
          href="#"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Fiverr and Upwork <span>-&gt;</span>
          </h2>
          <p>
            People can find us on the fiverr and upwork that are very reliable and reputed plateform to get any services as well.
           Welcome to all customers that want to join us. Thank You.
          </p>
        </a>
      </div>
       <p>
            People can find us on the fiverr and upwork that are very reliable and reputed plateform to get any services as well.
           Welcome to all customers that want to join us. Thank You.
          </p>
    </main>
  )
}
