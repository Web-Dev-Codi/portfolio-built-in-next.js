import Link from "next/link";
import path from "path";

const handler = async (req, res) => {
	const file = path.resolve("/files/BrianCV-minimal.pdf");
	const data = file.toString("base64");
	return data;
};

const Nav = async () => {
	const data = await handler();

	return (
		<div>
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
							className="about_button"
							download>
							Resume
						</Link>
					</div>
				</div>
			</nav>
		</div>
	);
};

export default Nav;
