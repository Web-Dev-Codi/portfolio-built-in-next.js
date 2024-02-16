"use client"
import Image from "next/image";
import Twitter from "../../public/images/twitter-256.svg";
import Github from "../../public/images/github-256.svg";
import Linkedin from "../../public/images/linkedin-256.svg";
import HeroImage from "../../public/images/coffeecoder.png";
import { motion as m } from "framer-motion";

const imageStyle = {
	height: "100%",
	width: "100%",
	clipPath: "circle(41.1% at 49% 51%)",
};
export default function Hero() {
	return (
		<div className="hero_container">
			<div className="hero_wrapper">
				<div className="hero_left">
					<m.h1
						initial={{ opacity: 0, scale: 0.5 }}
						animate={{ opacity: 1, scale: 1 }}
						transition={{
							duration: 3,
							delay: 0.7,
							ease: [0, 0.71, 0.2, 1.01],
						}}>
						"Crafting the Web, <br></br> One Pixel at a Time"
					</m.h1>
					<m.p
						className="hero_text"
						initial={{ opacity: 0, scale: 0.5 }}
						animate={{ opacity: 1, scale: 1 }}
						transition={{
							duration: 3,
							delay: 1.1,
							ease: [0, 0.71, 0.2, 1.01],
						}}>
						"Bringing your vision to life with passion and
						precision! Let's collaborate to create dynamic,
						innovative web solutions that are as unique as they are
						impressive."
					</m.p>
					<m.div
						className="hero_neon_btns"
						initial={{ opacity: 0, scale: 0.5 }}
						animate={{ opacity: 1, scale: 1 }}
						transition={{
							duration: 3,
							delay: 1.6,
							ease: [0, 0.71, 0.2, 1.01],
						}}>
						<m.a
							href="#contact"
							className="contact_button"
							whileHover={{
								scale: 1.1,
							}}
							transition={{ type: "spring", stiffness: 300 }}>
							Contact
						</m.a>
						<m.a
							href="#showcase"
							className="neon_button"
							whileHover={{
								scale: 1.1,
							}}
							transition={{ type: "spring", stiffness: 300 }}>
							Showcase
						</m.a>
					</m.div>
					<m.div
						className="hero_socials"
						initial={{ opacity: 0, scale: 0.5 }}
						animate={{ opacity: 1, scale: 1 }}
						transition={{
							duration: 3,
							delay: 1.8,
							ease: [0, 0.71, 0.2, 1.01],
						}}>
						<a href="https://twitter.com/WebDevCodi">
							<div className="hero_social">
								<Image
									src={Twitter}
									alt="twitter"
									width={35}
									height={35}
								/>
								<p>Twitter</p>
							</div>
						</a>
						<a href="https://github.com/Web-Dev-Codi">
							<div className="hero_social">
								<Image
									src={Github}
									alt="github"
									width={35}
									height={35}
								/>
								<p>Github</p>
							</div>
						</a>
						<a href="https://www.linkedin.com/in/brian-cordisco-500250205/">
							<div className="hero_social">
								<Image
									src={Linkedin}
									alt="linkedin"
									width={35}
									height={35}
								/>
								<p>Linkedin</p>
							</div>
						</a>
					</m.div>
				</div>
				<m.div
					className="hero_right"
					initial={{ opacity: 0, scale: 0.5 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{
						duration: 5,
						delay: 2,
						ease: [0, 0.71, 0.2, 1.01],
					}}>
					<div className="hero_image">
						<Image
							alt="hero image"
							style={imageStyle}
							src={HeroImage}
							decoding="sync"
							priority
						/>
					</div>
				</m.div>
			</div>
		</div>
	);
}
