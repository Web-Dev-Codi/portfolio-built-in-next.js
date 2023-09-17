"use client";
import { motion as m } from "framer-motion";

export default function About() {
	return (
		<div>
			<div className="about_me_wrapper">
				<m.div
					className="about_me_container"
					initial={{ opacity: 0, scale: 0.5 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{
						duration: 1.5,
						delay: 2.5,
						ease: [0, 0.71, 0.2, 1.01],
					}}>
					<div className="about_me_right">
						<h3>About Me</h3>
						<p>
							I'm Brian Cordisco, a certified Front-end Web
							Developer with a passion for computers, web
							development, and video games. I utilize HTML, CSS,
							JavaScript, and frameworks like React. My
							problem-solving skills, creativity, and excellent
							communication make me an asset to any team. When I'm
							not coding, you'll find me exploring virtual worlds
							and drawing inspiration for my projects. Let's
							collaborate and create something amazing together!
						</p>
					</div>
				</m.div>
			</div>
		</div>
	);
}
