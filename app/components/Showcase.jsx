import Image from "next/image";
import Ai from "../../public/images/ai.jpg";
import Diet from "../../public/images/diettracker.jpg";
import Flixx from "../../public/images/flixx.jpg";
import Git from "../../public/images/github.jpg";
import Inquiz from "../../public/images/inquizable.jpg";
import Weather from "../../public/images/weather.jpg";
import Js from "../../public/icons/SkillIconsJavascript.svg";
import ReactSvg from "../../public/icons/SkillIconsReactDark.svg";
import TailwindCSS from "../../public/icons/SkillIconsTailwindcssLight.svg";
import Node from "../../public/icons/SkillIconsNodejsDark.svg";
import ViteSvg from "../../public/icons/SkillIconsViteDark.svg";
import Gh from "../../public/icons/SkillIconsGithubLight.svg";
import Css from "../../public/icons/SkillIconsCss.svg";
import Wp from "../../public/icons/SkillIconsWebpackLight.svg";
import Html from "../../public/icons/SkillIconsHtml.svg";
import wave from "../../public/images/wave1440.svg";
import { ImArrowRight } from "react-icons/im";

const showcaseStyle = {
	maxInlineSize: "100%",
	maxHeight: "100%",
	blockSize: "auto",
	objectFit: "fill",
	transition: "transform 3s ease",
	backfaceVisibility: "hidden",
	posistion: "relative",
	Zindex: "-1",
};

const backgroundStyle = {
	backgroundRepeat: "no-repeat",
	backgroundSize: "cover",
};

export default function Showcase() {
	return (
		<div
			className="showcase_container"
			id="showcase_container"
			style={{
				backgroundImage: `url(${wave.src})`,
				backgroundRepeat: "no-repeat",
				backgroundSize: "cover",
			}}>
			<div className="showcase">
				<h3 className="showcase_title">Showcase</h3>
			</div>
			<section
				className="content-wrapper"
				id="showcase">
				<div
					className="showcase-card"
					id="showcase-card">
					<Image
						alt="Inquizable"
						loading="lazy"
						src={Inquiz}
						decoding="sync"
						className="showcase-card__image"
						style={showcaseStyle}
					/>
					<div
						className="showcase-card__text-wrapper"
						id="text-wrapper">
						<h2 className="showcase-card__title">Inquizable</h2>
						<div className="showcase-card__tech_stack">
							<Image
								alt="JavaScript icon"
								width={25}
								height={25}
								style={{ color: "transparent" }}
								src={Js}
							/>
							<Image
								alt="React icon"
								width={25}
								height={25}
								style={{ color: "transparent" }}
								src={ReactSvg}
							/>
							<Image
								alt="TailwindCSS icon"
								width={25}
								height={25}
								style={{ color: "transparent" }}
								src={TailwindCSS}
							/>
							<Image
								alt="Node.js icon"
								width={25}
								height={25}
								style={{ color: "transparent" }}
								src={Node}
							/>
						</div>
						<div
							className="showcase-card__details-wrapper"
							id="details-wrapper">
							<p className="showcase-card__excerpt">
								Test your general knowledge with this quiz app.
								User log-in, registration and profile page.
							</p>
							<a
								href="https://www.inquizable.com/"
								className="showcase-card__visit">
								<p>Visit Site</p>
								<ImArrowRight />
							</a>
						</div>
					</div>
				</div>
				<div
					className="showcase-card"
					id="showcase-card">
					<Image
						alt="github finder"
						loading="lazy"
						src={Git}
						decoding="sync"
						className="showcase-card__image"
						style={showcaseStyle}
					/>
					<div
						className="showcase-card__text-wrapper"
						id="text-wrapper">
						<h2 className="showcase-card__title">GitHub Finder</h2>
						<div className="showcase-card__tech_stack">
							<Image
								alt="Vite icon"
								width={25}
								height={25}
								style={{ color: "transparent" }}
								src={ViteSvg}
							/>
							<Image
								alt="TailwindCSS icon"
								width={25}
								height={25}
								style={{ color: "transparent" }}
								src={TailwindCSS}
							/>
							<Image
								alt="JavaScript icon"
								width={25}
								height={25}
								style={{ color: "transparent" }}
								src={Js}
							/>
							<Image
								alt="Github icon"
								width={25}
								height={25}
								style={{ color: "transparent" }}
								src={Gh}
							/>
						</div>
						<div
							className="showcase-card__details-wrapper"
							id="details-wrapper">
							<p className="showcase-card__excerpt">
								Search Githubs database for users, and display
								repos, stars, and achievements
							</p>
							<a
								href="https://git-hub-finder-vite.vercel.app/"
								className="showcase-card__visit">
								<p>Visit Site</p>
								<ImArrowRight />
							</a>
						</div>
					</div>
				</div>
				<div
					className="showcase-card"
					id="showcase-card">
					<Image
						alt="Global Weather"
						loading="lazy"
						src={Weather}
						decoding="sync"
						className="showcase-card__image"
						style={showcaseStyle}
					/>
					<div
						className="showcase-card__text-wrapper"
						id="text-wrapper">
						<h2 className="showcase-card__title">
							Global Weather App
						</h2>
						<div className="showcase-card__tech_stack">
							<Image
								alt="React icon"
								width={25}
								height={25}
								style={{ color: "transparent" }}
								src={ReactSvg}
							/>
							<Image
								alt="JavaScript icon"
								width={25}
								height={25}
								style={{ color: "transparent" }}
								src={Js}
							/>
							<Image
								alt="TailwindCSS icon"
								width={25}
								height={25}
								style={{ color: "transparent" }}
								src={TailwindCSS}
							/>
							<div
								className="showcase-card__details-wrapper"
								id="details-wrapper">
								<p className="showcase-card__excerpt">
									Weather App for local and global weather.
									Input location to display your local weather
								</p>
								<a
									href="https://weathertest-app.vercel.app"
									className="showcase-card__visit">
									<p>Visit Site</p>
									<ImArrowRight />
								</a>
							</div>
						</div>
					</div>
				</div>
				<div
					className="showcase-card"
					id="showcase-card">
					<Image
						alt="Diet-Tracker"
						loading="lazy"
						src={Diet}
						decoding="sync"
						className="showcase-card__image"
						style={showcaseStyle}
					/>
					<div
						className="showcase-card__text-wrapper"
						id="text-wrapper">
						<h2 className="showcase-card__title">Diet-Tracker</h2>
						<div className="showcase-card__tech_stack">
							<Image
								alt="html icon"
								width={25}
								height={25}
								style={{ color: "transparent" }}
								src={Html}
							/>
							<Image
								alt="JavaScript icon"
								width={25}
								height={25}
								style={{ color: "transparent" }}
								src={Js}
							/>
							<Image
								alt="CSS3 icon"
								width={25}
								height={25}
								style={{ color: "transparent" }}
								src={Css}
							/>
						</div>
						<div
							className="showcase-card__details-wrapper"
							id="details-wrapper">
							<p className="showcase-card__excerpt">
								Track calories burnt from exercise and dieting.
								Meals and workouts are calculated from daily
								expenditure.
							</p>
							<a
								href="https://dietracker.vercel.app/"
								className="showcase-card__visit">
								<p>Visit Site</p>
								<ImArrowRight />
							</a>
						</div>
					</div>
				</div>
				<div
					className="showcase-card"
					id="showcase-card">
					<Image
						alt="text to image"
						loading="lazy"
						src={Ai}
						decoding="sync"
						className="showcase-card__image"
						style={showcaseStyle}
					/>
					<div
						className="showcase-card__text-wrapper"
						id="text-wrapper">
						<h2 className="showcase-card__title">
							Text to Image Generator
						</h2>
						<div className="showcase-card__tech_stack">
							<Image
								alt="React icon"
								width={25}
								height={25}
								style={{ color: "transparent" }}
								src={ReactSvg}
							/>
							<Image
								alt="TailwindCSS icon"
								width={25}
								height={25}
								style={{ color: "transparent" }}
								src={TailwindCSS}
							/>
							<Image
								alt="JavaScript icon"
								width={25}
								height={25}
								style={{ color: "transparent" }}
								src={Js}
							/>
						</div>
						<div
							className="showcase-card__details-wrapper"
							id="details-wrapper">
							<p className="showcase-card__excerpt">
								Generate a custom image from text within seconds
								using AI.
							</p>
							<a
								href="https://texttoimagegenerator.vercel.app/"
								className="showcase-card__visit">
								<p>Visit Site</p>
								<ImArrowRight />
							</a>
						</div>
					</div>
				</div>
				<div
					className="showcase-card"
					id="showcase-card">
					<Image
						alt="Flixx Movie Database"
						loading="lazy"
						src={Flixx}
						decoding="sync"
						className="showcase-card__image"
						style={showcaseStyle}
					/>
					<div
						className="showcase-card__text-wrapper"
						id="text-wrapper">
						<h2 className="showcase-card__title">
							Flixx Movie Database
						</h2>
						<div className="showcase-card__tech_stack">
							<Image
								alt="HTML"
								width={25}
								height={25}
								style={{ color: "transparent" }}
								src={Html}
							/>
							<Image
								alt="CSS3 icon"
								width={25}
								height={25}
								style={{ color: "transparent" }}
								src={Css}
							/>
							<Image
								alt="JavaScript icon"
								width={25}
								height={25}
								style={{ color: "transparent" }}
								src={Js}
							/>
							<Image
								alt="Webpack icon"
								width={25}
								height={25}
								style={{ color: "transparent" }}
								src={Wp}
							/>
						</div>
						<div
							className="showcase-card__details-wrapper"
							id="details-wrapper">
							<p className="showcase-card__excerpt">
								Search a movie database for new releases,
								ratings and possible viewing pleasure
							</p>
							<a
								href="https://flixxmoviesearchengine.vercel.app/"
								className="showcase-card__visit">
								<p>Visit Site</p>
								<ImArrowRight />
							</a>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}
