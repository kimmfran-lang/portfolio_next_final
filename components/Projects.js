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
                            {/* 1. Name */}
                            <h3 className="project-title">{project.name}</h3>

                            {/* 2. Goal (Description) */}
                            <p className="project-goal">{project.description}</p>

                            {/* 3. Date */}
                            <div className="project-meta">
                                <span className="project-date">
                                    {formatDate(project.startDate)} - {project.endDate ? formatDate(project.endDate) : 'Present'}
                                </span>
                                {/* Keeping Company subtle next to date for context */}
                                <span className="project-company-tag">{project.company}</span>
                            </div>

                            {/* 4. Contribution & Result (Rounded Icons/Boxes) */}
                            <div className="project-metrics-wrapper">
                                {project.contribution && (
                                    <div className="metric-box contribution">
                                        <span className="metric-label">Contribution</span>
                                        <span className="metric-value">{project.contribution}</span>
                                    </div>
                                )}
                                {project.result && (
                                    <div className="metric-box result">
                                        <span className="metric-label">Result</span>
                                        <span className="metric-value">{project.result}</span>
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
