import Html from "../../public/assets/html.svg"
import Css from "../../public/assets/css3.svg"
import Js from "../../public/assets/javascript.svg"
import Ts from "../../public/assets/typescript.svg"
import Git from "../../public/assets/git.svg"
import Node from "../../public/assets/node.svg"
import React from "../../public/assets/reactjs.svg"

export default function Skills() {
  return (
    <main>
        <section className="skills_container">
            <div>
                <div className="sub_title">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <div>
                    <h2 className="skills_header">Tech Stack</h2>
                </div>
                <div className="skill_list">
                    <div>
                        <img src={Html} alt="html" loading="lazy" width="80" height="80" style={{color:"transparent"}}/>
                    </div>
                    <div>
                        <img alt="css" loading="lazy" width="80" height="80" style={{color:"transparent"}}
                            src={Css}/>
                    </div>
                    <div>
                        <img alt="git" loading="lazy" width="80" height="80" style={{color:"transparent"}}
                            src={Git}/>
                    </div>
                    <div>
                        <img alt="javaScript" loading="lazy" width="80" height="80" style={{color:"transparent"}}
                            src={Js}/>
                    </div>
                    <div>
                        <img alt="node.js" loading="lazy" width="80" height="80" style={{color:"transparent"}}
                            src={Node}/>
                    </div>
                    <div>
                        <img alt="react" loading="lazy" width="80" height="80" style={{color:"transparent"}}
                            src={React}/>
                    </div>
                    <div>
                        <img alt="typescript" loading="lazy" width="80" height="80" style={{color:"transparent"}}
                            src={Ts}/>
                    </div>
                </div>
            </div>
        </section>
    </main>
  )
}
