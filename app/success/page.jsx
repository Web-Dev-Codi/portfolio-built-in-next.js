import styles from '../success/success.module.css'
import wave from '../../public/assets/wave1440.svg'

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
              <a href="/" className={styles.success_card_anchor}><i className="fas fa-long-arrow-alt-left"></i>Back to the good stuff</a>
            </div>
        </section>
    </main>
  )
}
