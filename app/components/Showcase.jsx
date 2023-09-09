import Image from "next/image"
import Ai from "../../public/images/ai.jpg"
import Diet from "../../public/images/diettracker.jpg"
import Flixx from "../../public/images/flixx.jpg"
import Git from "../../public/images/github.jpg"
import Inquiz from "../../public/images/inquizable.jpg"
import Weather from "../../public/images/weather.jpg"
import BG from "../../public/images/graywavewide.png"


const showcaseStyle = {
  maxInlineSize: '100%',
  maxHeight: '100%',
  blockSize: 'auto',
  objectFit: 'fill',
  transition: 'transform 3s ease',
  backfaceVisibility: 'hidden',
  posistion: 'relative',
  Zindex: '-1',
}

const backgroundStyle = {
  backgroundImage: 'url("../../public/images/wave1440.svg")',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
}

export default function Showcase() {
  return (
    <main>
         <div className="showcase_container" id="showcase_container" style={backgroundStyle}>
            <div className="showcase">
                <h3 className="showcase_title">Showcase</h3>
            </div>
            <section className="content-wrapper" id="showcase">
                <div className="showcase-card" id="showcase-card">
                    <Image alt="Inquizable" loading="lazy" src={Inquiz} decoding="sync" className="showcase-card__image" style={showcaseStyle}/>
                    <div className="showcase-card__text-wrapper" id="text-wrapper">
                        <h2 className="showcase-card__title">Inquizable</h2>
                        <div className="showcase-card__tech_stack">Tech Used: JavaScript, React, TailwindCSS, Node.js</div>
                        <div className="showcase-card__details-wrapper" id="details-wrapper">
                            <p className="showcase-card__excerpt">Test your general knowledge with this quiz app. User
                                log-in,
                                registration and profile
                                page.</p>
                            <a href="https://www.inquizable.com/" className="showcase-card__visit">Visit Site <i
                                    className="fas fa-long-arrow-alt-right"></i></a>
                        </div>
                    </div>
                </div>
                <div className="showcase-card" id="showcase-card">
                    <Image alt="github finder" loading="lazy" src={Git} decoding="sync" className="showcase-card__image" style={showcaseStyle}/>
                    <div className="showcase-card__text-wrapper" id="text-wrapper">
                        <h2 className="showcase-card__title">GitHub Finder</h2>
                        <div className="showcase-card__tech_stack">Tech Used: Vite.js, TailwindCSS, JavaScript, Github API
                        </div>
                        <div className="showcase-card__details-wrapper" id="details-wrapper">
                            <p className="showcase-card__excerpt">Search Githubs database for users, and diplay repos,
                                stars, and
                                achievements</p>
                            <a href="https://git-hub-finder-vite.vercel.app/" className="showcase-card__visit">Visit
                                Site <i className="fas fa-long-arrow-alt-right"></i></a>
                        </div>
                    </div>
                </div>
                <div className="showcase-card" id="showcase-card">
                    <Image alt="Global Weather" loading="lazy" src={Weather} decoding="sync" className="showcase-card__image" style={showcaseStyle}/>
                    <div className="showcase-card__text-wrapper" id="text-wrapper">
                        <h2 className="showcase-card__title">Global Weather App</h2>
                        <div className="showcase-card__tech_stack">Tech Used: React, JavaScript, TailwindCSS</div>
                        <div className="showcase-card__details-wrapper" id="details-wrapper">
                            <p className="showcase-card__excerpt">Weather App for local and global weather. Input location
                                to
                                display
                                your local weather</p>
                            <a href="https://weathertest-app.vercel.app" className="showcase-card__visit">Visit Site <i
                                    className="fas fa-long-arrow-alt-right"></i></a>
                        </div>
                    </div>
                </div>
                <div className="showcase-card" id="showcase-card">
                    <Image alt="Diet-Tracker" loading="lazy" src={Diet} decoding="sync" className="showcase-card__image" style={showcaseStyle}/>
                    <div className="showcase-card__text-wrapper" id="text-wrapper">
                        <h2 className="showcase-card__title">Diet-Tracker</h2>
                        <div className="showcase-card__tech_stack">Tech Used: JavaScript, HTML, CSS</div>
                        <div className="showcase-card__details-wrapper" id="details-wrapper">
                            <p className="showcase-card__excerpt">Track calories burnt from exercise and dieting. Meals and
                                workouts
                                are
                                calculated from
                                daily expenditure.</p>
                            <a href="https://dietracker.vercel.app/" className="showcase-card__visit">Visit Site <i
                                    className="fas fa-long-arrow-alt-right"></i></a>
                        </div>
                    </div>
                </div>
                <div className="showcase-card" id="showcase-card">
                    <Image alt="text to image" loading="lazy" src={Ai} decoding="sync" className="showcase-card__image" style={showcaseStyle}/>
                    <div className="showcase-card__text-wrapper" id="text-wrapper">
                        <h2 className="showcase-card__title">Text to Image Generator</h2>
 https://www.w3schools.com/cssref/css3_pr_object-position.php                       <div className="showcase-card__tech_stack">
                            <p>Tech Used: OpenAi API, TailwindCSS, React.js, JavaScript</p>
                        </div>
                        <div className="showcase-card__details-wrapper" id="details-wrapper">
                            <p className="showcase-card__excerpt">Generate a custom image from text within seconds using AI.
                            </p>
                            <a href="https://texttoimagegenerator.vercel.app/" className="showcase-card__visit">Visit
                                Site <i className="fas fa-long-arrow-alt-right"></i></a>
                        </div>
                    </div>
                </div>
                <div className="showcase-card" id="showcase-card">
                    <Image alt="Flixx Movie Database" loading="lazy" src={Flixx} decoding="sync" className="showcase-card__image" style={showcaseStyle}/>
                    <div className="showcase-card__text-wrapper" id="text-wrapper">
                        <h2 className="showcase-card__title">Flixx Movie Database</h2>
                        <div className="showcase-card__tech_stack">Tech Used: JavaScript, HTML, CSS, Webpack</div>
                        <div className="showcase-card__details-wrapper" id="details-wrapper">
                            <p className="showcase-card__excerpt">Search a movie database for new releases, ratings and
                                possible
                                viewing pleasure</p>
                            <a href="https://flixxmoviesearchengine.vercel.app/" className="showcase-card__visit">Visit
                                Site <i className="fas fa-long-arrow-alt-right"></i></a>
                        </div>
               </div>
          </div>
       </section>
      </div>
   </main>
  )
}
