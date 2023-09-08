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
                    <a href="./assets/cv.pdf" className="about_button">
                       Resume
                    </a>
                </div>
            </div>
        </nav>
</div>
  )
}
