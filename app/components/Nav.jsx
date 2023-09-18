import Link from "next/link";

export default function Nav() {
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
							href="/app/files/BrianCV-minimal.pdf"
							target="_blank"
							locale="false"
							rel="noopener noreferrer"
							className="about_button"
							download>
							Resume
						</Link>
					</div>
				</div>
			</nav>
		</div>
	);
}
