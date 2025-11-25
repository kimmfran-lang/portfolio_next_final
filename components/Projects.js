export default function Projects({ projects }) {
    const formatDate = (dateString) => {
        if (!dateString) return '';
        const date = new Date(dateString);
        return `${date.getFullYear()}.${String(date.getMonth() + 1).padStart(2, '0')}`;
    };

    return (
        <section id="projects" className="section projects-section">
            <div className="container">
                <h2 className="section-title">Project Highlights</h2>
                <div className="projects-grid">
                    {projects.map((project) => (
                        <div key={project.id} className="project-card">
                            <div className="project-header">
                                <span className="project-company">{project.company}</span>
                                <span className="project-date">
                                    {formatDate(project.startDate)} - {project.endDate ? formatDate(project.endDate) : 'Present'}
                                </span>
                            </div>
                            <h3 className="project-title">{project.name}</h3>
                            <div className="project-tags">
                                {project.tags.map(tag => (
                                    <span key={tag} className="project-tag">{tag}</span>
                                ))}
                            </div>
                            <p className="project-desc">{project.description}</p>
                            {project.contribution && (
                                <div className="project-detail">
                                    <strong>Contribution:</strong> {project.contribution}
                                </div>
                            )}
                            {project.result && (
                                <div className="project-detail">
                                    <strong>Result:</strong> {project.result}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
