"use client"
import Link from 'next/link';
import styles from '../success/success.module.css'
import wave from '../../public/images/wave1440.svg'
import { motion as m } from "framer-motion";
import {ImArrowLeft} from "react-icons/im"

export default function Success() {
  return (
		<main
			className={styles.main}
			style={{
				backgroundImage: `url(${wave.src})`,
				backgroundRepeat: "no-repeat",
				backgroundSize: "cover",
			}}>
			<m.section
				className={styles.success_modal}
				initial={{ opacity: 0, scale: 0.5 }}
				animate={{ opacity: 1, scale: 1 }}
				transition={{
					duration: 1.5,
					delay: 0.3,
					ease: [0, 0.71, 0.2, 1.01],
				}}>
				<div
					id="modal"
					className={styles.modal}>
					<div
						className={styles.modal_content}
						id="modal_content">
						<div className={styles.modal_container}>
							<p>Thank You!</p>
							<p>Message Sent Successfully. 👍</p>
						</div>
					</div>
					<Link
						href="/"
						className={styles.success_card_anchor}>
						<ImArrowLeft />
						<p>Back to the good stuff</p>
					</Link>
				</div>
			</m.section>
		</main>
  );
}
