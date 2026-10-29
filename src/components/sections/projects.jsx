import onlyloveonline from '../../assets/images/projects/onlyloveonline.png';

const Projects = () => {
    return (
        <section id="projects" className="section section-about reveal-item">
            <ul className="groups-list">
                <li className="group">
                    <div className='group-hover-bg'></div>
                    <div className="group-header">
                        <img src={onlyloveonline} alt='Магазин одежды' />
                    </div>
                    <div className="group-body">
                        <h3>
                            <a href="https://github.com/maxzamolin/clothing-store" target="_blank">Интернет магазин брэнда одежды</a>
                        </h3>
                        <p>
                            Разработка визуальной части магазина по макету из Figma для последующей интеграции в React и с бэком.
                            Весь код разбит по компонентам. На гите представлена как чистая верстка, так и интегрированная в React.
                        </p>
                        <ul className="skils">
                            <li className="skill">HTML</li>
                            <li className="skill">CSS</li>
                            <li className="skill">JavaScript</li>
                            <li className="skill">Figma</li>
                        </ul>
                    </div>
                </li>
            </ul>
            {/* <a className="external link" href="">Посмотреть все проекты</a> */}
        </section>
    )
}

export default Projects;