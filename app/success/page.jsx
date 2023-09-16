import Link from 'next/link'
import styles from '../success/success.module.css'
import wave from '../../public/images/wave1440.svg'
import {FaLongArrowAltLeft} from "react-icons/fa"

export default function Success() {
  return (
    <main className={styles.main} style={{backgroundImage: `url(${wave.src})`,
    backgroundAttachment: 'fixed',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
    }}>
        <section className={styles.success_modal}>
            <div id="modal" className={styles.modal}>
              <div className={styles.modal_content} id="modal_content">
                  <div className={styles.modal_container}>
                    <p>Thank You!</p>
                    <p>Message Sent Successfully. 👍</p>
                  </div>
              </div>
              <Link href="/" className={styles.success_card_anchor}><FaLongArrowAltLeft  className={styles.svg} /><p>Back to the good stuff</p></Link>
            </div>
        </section>
    </main>
  )
}
