import Link from "next/link";
import path from "path";

const handler = async (req, res) => {
	const file = path.resolve("/files/Brian-Cordisco-CV-Edited-Feb-24.pdf");
	const data = file.toString("base64");
	return data;
};

export const ResumeButton = async () => {
	const data = await handler();

	return (
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
	);
};
