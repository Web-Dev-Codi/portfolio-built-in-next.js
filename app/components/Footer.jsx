import styles from "./footer.module.css"

export default function Footer() {
  return (
    <main>
      <div className={styles.footer}>
            <div className={styles.footer_items}>
                <div className={styles.contact_link}>
                    <a href="#contact">Contact</a>
                </div>
                <div className={styles.copyright_link}>
                    <div className={styles.copyright}>
                        <p className={styles.copy_para}>Copyright &copy;
                            <script>document.write(new Date().getFullYear())</script> Brian Cordisco All Rights
                            Reserved
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </main>
  )
}
