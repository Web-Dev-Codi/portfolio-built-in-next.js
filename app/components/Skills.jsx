import Image from "next/image"
import Html from "../../public/images/html.svg"
import Css from "../../public/images/css3.svg"
// import Js from "../../public/images/javascript.svg"
import Tailwind from "../../public/icons/SkillIconsTailwindcssLight.svg"
import Ts from "../../public/images/typescript.svg"
import Git from "../../public/images/git.svg"
import Node from "../../public/images/node.svg"
import React from "../../public/icons/React.png"
import Javascript from "../../public/icons/JavaScript.png";
import Next from "../../public/icons/Nextjs-logo.svg";
import GitLogo from "../../public/icons/gh.svg";
import Vite from "../../public/icons/SkillIconsViteDark.svg";


export default function Skills() {
  return (
		<section className="skills_container">
			<div>
				<div className="sub_title">
					<span></span>
					<span></span>
					<span></span>
					<span></span>
					<span></span>
					<span></span>
					<span></span>
					<span></span>
					<span></span>
				</div>
				<div>
					<h2 className="skills_header">Tech Stack</h2>
				</div>
				<div className="skill_list">
					<div>
						<Image
							src={Html}
							alt="html"
							loading="lazy"
							width={100}
							height={100}
							style={{ color: "transparent" }}
						/>
					</div>
					<div>
						<Image
							alt="css"
							loading="lazy"
							width={100}
							height={100}
							style={{ color: "transparent" }}
							src={Css}
						/>
					</div>
					<div>
						<Image
							alt="tailwind"
							loading="lazy"
							width={100}
							height={100}
							style={{ color: "transparent" }}
							src={Tailwind}
						/>
					</div>
					<div>
						<Image
							alt="git"
							loading="lazy"
							width={100}
							height={100}
							style={{ color: "transparent" }}
							src={Git}
						/>
					</div>
					<div>
						<Image
							alt="javaScript"
							loading="lazy"
							width={100}
							height={100}
							style={{ color: "transparent" }}
							src={Javascript}
						/>
					</div>
					<div>
						<Image
							alt="node.js"
							loading="lazy"
							width={100}
							height={100}
							style={{ color: "transparent" }}
							src={Node}
						/>
					</div>
					<div>
						<Image
							alt="react"
							loading="lazy"
							width={100}
							height={100}
							style={{ color: "transparent" }}
							src={React}
						/>
					</div>
					<div>
						<Image
							alt="typescript"
							loading="lazy"
							width={100}
							height={100}
							style={{ color: "transparent" }}
							src={Ts}
						/>
					</div>
					<div>
						<Image
							alt="Next.js logo"
							loading="lazy"
							width={100}
							height={100}
							style={{ color: "transparent" }}
							src={Next}
						/>
					</div>
					<div>
						<Image
							alt="Git hub logo"
							loading="lazy"
							width={100}
							height={100}
							style={{ color: "transparent" }}
							src={GitLogo}
						/>
					</div>
					<div>
						<Image
							alt="Vite logo"
							loading="lazy"
							width={100}
							height={100}
							style={{ color: "transparent" }}
							src={Vite}
						/>
					</div>
				</div>
			</div>
		</section>
  );
}
