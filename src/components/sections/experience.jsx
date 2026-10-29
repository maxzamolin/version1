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
            <a className="external link" href={resume} target="_blank">Посмотреть мое резюме</a>
        </section>
    )
}

export default Experience;