import Image from "next/image"
import Twitter from "../../public/images/twitter-256.svg"
import Github from "../../public/images/github-256.svg"
import Linkedin from "../../public/images/linkedin-256.svg"
import HeroImage from "../../public/images/squarehero.jpg"

const imageStyle = {
  height: '100%',
  width: '100%',
  clipPath: 'circle(41.1% at 49% 51%)'
}
export default function Hero() {
  return (
    <main>
        <div className="hero_container">
            <div className="hero_wrapper">
                 <div className="hero_left">
                    <h1>
                        "Crafting the Web, <br></br> One Pixel at a Time"
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
                                <Image src={Twitter} alt="twitter" width={35} height={35}/>
                                <p>Twitter</p>
                            </div>
                        </a>
                        <a href="https://github.com/Web-Dev-Codi">
                            <div className="hero_social">
                                <Image src={Github} alt="github" width={35} height={35}/>
                                <p>Github</p>
                            </div>
                        </a>
                        <a href="https://www.linkedin.com/in/brian-cordisco-500250205/">
                            <div className="hero_social">
                                <Image src={Linkedin} alt="linkedin" width={35} height={35}/>
                                <p>Linkedin</p>
                            </div>
                        </a>
                    </div>
                </div>
                <div className="hero_right">
                    <div className="hero_image">
                        <Image alt="hero image" style={imageStyle} src={HeroImage} decoding="sync" priority/>
                    </div>
                </div>
           </div>
        </div>
    </main>
  )
}
