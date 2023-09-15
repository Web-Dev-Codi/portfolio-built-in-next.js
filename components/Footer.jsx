import Image from "next/image";
import Linkedin from "../public/icons/DeviconLinkedin.svg"
import Twitter from "../public/icons/DeviconTwitter.svg"
import Git from "../public/icons/LogosGithubIcon.svg"

const date = new Date().getFullYear();

export default function Footer() {
  return (
    <div className="footer">
            <div className="footer_items">
              <div className="contact_link">
                    <div className="social_media_contacts">
                        <a href="https://www.linkedin.com/in/brian-cordisco-500250205/">  <Image alt="Linkedin icon" width="20" height="20" style={{color:"transparent"}}
                            src={Linkedin}/></a>
                       <a href="https://twitter.com/WebDevCodi"> <Image alt="Twitter icon" width="20" height="20" style={{color: "transparent"}}
                             src={Twitter}/></a>
                        <a href="https://github.com/Web-Dev-Codi"><Image alt="Github icon" width="20" height="20" style={{color:"transparent"}}
                            src={Git}/></a>
                    </div>
                    <a href="#contact" className="barcode_font">CONTACT</a>
                </div>
                <div className="copyright_link">
                    <div className="copyright">
                        <p className="copy_para">Copyright &copy;
                            {date} Brian Cordisco All Rights
                            Reserved
                        </p>
                    </div>
                </div>
            </div>
        </div>
  )
}
