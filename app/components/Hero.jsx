import Image from "next/image"


export default function Hero() {
  return (
    <main>
        <div className="hero_container">
            <div className="hero_wrapper">
                 <div className="hero_left">
                    <h1>
                        "Crafting the Web, One Pixel at a Time"
                    </h1>
                    <p className="hero_text">
                        "Bringing your vision to life with passion and precision! Let's collaborate to create dynamic, innovative web solutions that are as unique as they are impressive."
                    </p>
                    <div className="hero_neon_btns">
                        <a href="#contact" className="contact_button">
                            Contact
                        </a>
                        <a href="#showcase" className="neon_button">
                            Showcase
                        </a>
                    </div>
                    <div className="hero_socials">
                        <a href="https://twitter.com/WebDevCodi">
                            <div className="hero_social">
                                <Image src="../../public/images/twitter-256.svg" alt="twitter"/>
                                <p>Twitter</p>
                            </div>
                        </a>
                        <a href="https://github.com/Web-Dev-Codi">
                            <div className="hero_social">
                                <Image src="../../public/images/github-256.svg" alt="github" />
                                <p>Github</p>
                            </div>
                        </a>
                        <a href="https://www.linkedin.com/in/brian-cordisco-500250205/">
                            <div className="hero_social">
                                <Image src="../../public/images/linkedin-256.svg" alt="linkedin"/>
                                <p>Linkedin</p>
                            </div>
                        </a>
                    </div>
                </div>
                <div className="hero_right">
                    <div className="hero_image">
                        <Image alt="hero image" loading="lazy" width="100%" height="100%" src="assets/squarehero.webp" decoding="sync" />
                    </div>
                </div>
           </div>
        </div>
    </main>
  )
}
