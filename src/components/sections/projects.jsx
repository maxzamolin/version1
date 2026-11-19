import onlyloveonline from '../../assets/images/projects/onlyloveonline.png';
import data from '../../data/data.json';

const Projects = () => {
    return (
        <section id="projects" className="section section-about reveal-item">
            <ul className="groups-list">
                {data.projects.map((project) => (
                <li className="group" key={project.id}>
                    <div className='group-hover-bg'></div>
                    <div className="group-header">
                        <img src={project.image} alt={project.title} />
                    </div>
                    <div className="group-body">
                        <h3>
                            <a href={project.github} target="_blank">{project.title}</a>
                        </h3>
                        <p>{project.description}</p>
                        <ul className="skils">
                            {project.stack.map((tech) => (
                                <li className="skill" key={tech}>{tech}</li>
                            ))}
                        </ul>
                    </div>
                </li>
                ))}
            </ul>
            {/* <a className="external link" href="">Посмотреть все проекты</a> */}
        </section>
    )
}

export default Projects;