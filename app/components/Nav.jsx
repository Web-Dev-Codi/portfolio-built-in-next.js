import Link from "next/link";
import { ResumeButton } from "./ResumeButton";

import React from 'react'

export default function Nav() {
  return (
	<div className="nav_bg">
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
						<ResumeButton />
					</div>
				</nav>
			</div>
		</div>
  )
}
