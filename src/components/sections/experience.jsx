import resume from '../../assets/files/zamolin-maksim.pdf'

const Experience = () => {
    return (
        <section id="experience" className="section section-about reveal-item">
            <ul className="groups-list">
                <li className="group">
                    <div className='group-hover-bg'></div>
                    <div className="group-header">
                        2023 — Сейчас
                    </div>
                    <div className="group-body">
                        <h3>Web разработчик</h3>
                        <p>
                            Разработка сайтов, страниц, компонентов и последующая их интеграция с движком компании. Доработка и поддержка проектов на различных CMS системах.
                        </p>
                        <ul className="skils">
                            <li className="skill">HTML</li>
                            <li className="skill">CSS</li>
                            <li className="skill">JavaScript</li>
                            <li className="skill">PHP</li>
                            <li className="skill">LESS</li>
                        </ul>
                    </div>
                </li>
                <li className="group">
                    <div className='group-hover-bg'></div>
                    <div className="group-header">
                        2019 — 2023
                    </div>
                    <div className="group-body">
                        <h3>Web разработчик</h3>
                        <p>Разработка и поддержка веб проектов. Работа с генератором статических сайтов. Интеграция верстки с CMS системами. Поддержка, доработка и разработка веб проектов на различных CMS системах. Работа с различными веб фреймворками.</p>
                        
                        <ul className="skils">
                            <li className="skill">HTML</li>
                            <li className="skill">CSS</li>
                            <li className="skill">JavaScript</li>
                            <li className="skill">Jekyll</li>
                            <li className="skill">SASS</li>
                        </ul>
                    </div>
                </li>
            </ul>
            <a className="external link" href={resume} target="_blank">
                Посмотреть мое резюме
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px" aria-hidden="true"><path fill-rule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clip-rule="evenodd"></path></svg>
            </a>
        </section>
    )
}

export default Experience;