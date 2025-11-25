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
                            {/* 1. Company (Badge at top-left) */}
                            <div className="project-company-wrapper">
                                <span className="project-company-badge">{project.company}</span>
                            </div>

                            {/* 2. Name */}
                            <h3 className="project-title">{project.name}</h3>

                            {/* 3. Goal (Description) */}
                            <p className="project-goal">{project.description}</p>

                            {/* 4. Date */}
                            <div className="project-date-wrapper">
                                <span className="project-date">
                                    {formatDate(project.startDate)} - {project.endDate ? formatDate(project.endDate) : 'Present'}
                                </span>
                            </div>

                            {/* 5. Contribution (Box) & Result (Text) */}
                            <div className="project-content-footer">
                                {project.contribution && (
                                    <div className="metric-box contribution">
                                        <span className="metric-label">Contribution</span>
                                        <span className="metric-value">{project.contribution}</span>
                                    </div>
                                )}

                                {project.result && (
                                    <div className="project-result">
                                        <span className="result-label">Result</span>
                                        <p className="result-text">{project.result}</p>
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
