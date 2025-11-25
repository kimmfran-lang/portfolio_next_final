export default function About() {
    return (
        <section id="about" className="section about-section">
            <div className="container">
                <h2 className="section-title">About Me</h2>
                <div className="about-grid">
                    <div className="about-text">
                        <p>
                            커머스 제휴 상품 및 O2O 플랫폼 기획을 담당해온 8년차 PM입니다.<br />
                            월 수십억 원 규모의 프로젝트를 리딩하며 비즈니스 성장을 견인했습니다.<br />
                            API 통신과 백엔드 로직에 대한 깊은 이해를 바탕으로 개발자와 원활하게 소통합니다.
                        </p>
                        <div className="skills-wrapper">
                            <h3>Key Skills & Tools</h3>
                            <div className="skills-category">
                                <span>Planning</span>
                                <div className="tags">
                                    <span className="tag">Jira</span>
                                    <span className="tag">Confluence</span>
                                    <span className="tag">Figma</span>
                                    <span className="tag">Axure</span>
                                </div>
                            </div>
                            <div className="skills-category">
                                <span>Data</span>
                                <div className="tags">
                                    <span className="tag">GA</span>
                                    <span className="tag">SQL</span>
                                    <span className="tag">ADsP</span>
                                </div>
                            </div>
                            <div className="skills-category">
                                <span>Tech</span>
                                <div className="tags">
                                    <span className="tag">RESTful API</span>
                                    <span className="tag">MSA</span>
                                    <span className="tag">Real-time Process</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="about-stats">
                        <div className="stat-card">
                            <span className="stat-number">8+</span>
                            <span className="stat-label">Years Exp.</span>
                        </div>
                        <div className="stat-card">
                            <span className="stat-number">3</span>
                            <span className="stat-label">Major Platforms</span>
                        </div>
                        <div className="stat-card">
                            <span className="stat-number">10+</span>
                            <span className="stat-label">Key Projects</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
