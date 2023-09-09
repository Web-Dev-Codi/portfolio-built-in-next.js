import Link from "next/link"

export default function Nav() {
  return (
    <div>
        <div className="nav_background"></div>
        <nav className="wide_nav_container">
            <div className="nav_left">
                <a href="/" className="name">Brian Cordisco</a>
            </div>
            <div className="nav_right">
                <div className="nav_buttons">
                    <a href="../../public/images/cv.pdf" className="about_button" target="_blank" rel="noopener norefferrer" download>
                       Resume
                    </a>
                </div>
            </div>
        </nav>
</div>
  )
}
