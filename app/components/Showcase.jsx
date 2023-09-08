import Image from "next/image"

export default function Showcase() {
  return (
    <div>
         <div className="showcase_container" id="showcase_container">
            <div className="showcase">
                <h3 className="showcase_title">Showcase</h3>
            </div>
            <section className="content-wrapper" id="showcase">
                <div className="showcase-card" id="showcase-card">
                    <Image alt="Inquizable" loading="lazy" width="100%" height="100%" src="../../public/images/inquizable.webp" decoding="sync" class="showcase-card__image" />
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
                    <Image alt="github finder" loading="lazy" width="100%" height="100%" src="../../public/images/github.webp" decoding="sync" className="showcase-card__image"/>
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
                    <Image alt="Global Weather" loading="lazy" width="100%" height="100%" src="../../public/images/weather.webp" decoding="sync" className="showcase-card__image"/>
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
                    <Image alt="Diet-Tracker" loading="lazy" width="100%" height="100%" src="../../public/images/diettracker.webp" decoding="sync" className="showcase-card__image" />
                    <div className="showcase-card__text-wrapper" id="text-wrapper">
                        <h2 className="showcase-card__title">Diet-Tracker</h2>
                        <div className="showcase-card__tech_stack">Tech Used: JavaScript, HTML, CSS</div>
                        <div className="showcase-card__details-wrapper" id="details-wrapper">
                            <p className="showcase-card__excerpt">Track calories burnt from exercise and dieting. Meals and
                                workouts
                                are
                                calculated from
                                daily expenditure.</p>
                            <a href="https://dietracker.vercel.app/" class="showcase-card__visit">Visit Site <i
                                    className="fas fa-long-arrow-alt-right"></i></a>
                        </div>
                    </div>
                </div>
                <div className="showcase-card" id="showcase-card">
                    <Image alt="text to image" loading="lazy" width="100%" height="100%" src="../../public/images/ai.webp" decoding="sync" className="showcase-card__image"/>
                    <div className="showcase-card__text-wrapper" id="text-wrapper">
                        <h2 className="showcase-card__title">Text to Image Generator</h2>
                        <div className="showcase-card__tech_stack">
                            <p>Tech Used: OpenAi API, TailwindCSS, React.js, JavaScript</p>
                        </div>
                        <div className="showcase-card__details-wrapper" id="details-wrapper">
                            <p className="showcase-card__excerpt">Generate a custom image from text within seconds using AI.
                            </p>
                            <a href="https://texttoimagegenerator.vercel.app/" className="showcase-card__visit">Visit
                                Site <i class="fas fa-long-arrow-alt-right"></i></a>
                        </div>
                    </div>
                </div>
                <div className="showcase-card" id="showcase-card">
                    <Image alt="Flixx Movie Database" loading="lazy" width="100%" height="100%" src="../../public/images/flixx.webp" decoding="sync" className="showcase-card__image"/>
                    <div className="showcase-card__text-wrapper" id="text-wrapper">
                        <h2 className="showcase-card__title">Flixx Movie Database</h2>
                        <div className="showcase-card__tech_stack">Tech Used: JavaScript, HTML, CSS, Webpack</div>
                        <div className="showcase-card__details-wrapper" id="details-wrapper">
                            <p className="showcase-card__excerpt">Search a movie database for new releases, ratings and
                                possible
                                viewing pleasure</p>
                            <a href="https://flixxmoviesearchengine.vercel.app/" className="showcase-card__visit">Visit
                                Site <i class="fas fa-long-arrow-alt-right"></i></a>
                        </div>
               </div>
          </div>
       </section>
      </div>
   </div>
  )
}
