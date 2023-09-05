import React from 'react'

export default function Nav() {
  return (
    <div>
        <div class="nav_background"></div>
        <nav class="wide_nav_container">
            <div class="nav_left">
                <a href="/" class="name">Brian Cordisco</a>
            </div>
            <div class="nav_right">
                <div class="nav_buttons">
                    <a href="/" class="home_button">
                        Home
                    </a>
                    <a href="./assets/cv.pdf" class="about_button">
                       Resume
                    </a>
                </div>
            </div>
        </nav>
</div>
  )
}
