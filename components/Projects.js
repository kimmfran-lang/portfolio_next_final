export default function Projects({ projects }) {
    return (
        <section id="projects" className="section projects-section">
            <div className="container">
                <h2 className="section-title">Project Highlights</h2>
                <div className="projects-grid">
                    {projects.map((project) => (
                        <article key={project.id} className="project-card">
                            <div className="project-header">
                                <span className="project-company">{project.company}</span>
                                <h3>{project.name}</h3>
                            </div>
                            <div className="project-body">
                                <p>{project.description}</p>
                                <ul className="project-metrics">
                                    <li>Contribution: {project.contribution}</li>
                                    <li>Result: {project.result}</li>
                                </ul>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    )
}
