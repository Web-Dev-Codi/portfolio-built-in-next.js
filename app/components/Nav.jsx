import Link from "next/link";
import path from "path";
import { motion as m } from "framer-motion";

const handler = async (req, res) => {
	const file = path.resolve("/files/BrianCordisco-CV-Web-Developer.pdf");
	const data = file.toString("base64");
	return data;
};

const Nav = async () => {
	const data = await handler();

	return (
		<div className="nav_bg">
			<m.div
				initial={{ y: -65 }}
				animate={{ y: 0 }}
				transition={{ duration: 2, type: "spring" }}
			    		
			>
				<div className="nav_background"></div>
				<nav className="wide_nav_container">
					<div className="nav_left">
						<a
							href="/"
							className="name">
							Brian Cordisco
						</a>
					</div>
					<div className="nav_right">
						<div className="nav_buttons">
							<Link
								href={data}
								target="_blank"
								rel="noopener noreferrer"
								locale="false"
								className="resume_button"
								download>
								Resume
							</Link>
						</div>
					</div>
				</nav>
			</m.div>
		</div>
	);
};

export default Nav;
