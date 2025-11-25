export default function Testimonials({ testimonials }) {
    return (
        <section id="testimonials" className="section testimonials-section">
            <div className="container">
                <h2 className="section-title">Colleague Testimonials</h2>
                <div className="testimonials-grid">
                    {testimonials.map((item) => (
                        <div key={item.id} className={`testimonial-card ${item.featured ? 'featured' : ''}`}>
                            <div className="quote-icon">"</div>
                            <p className="quote-text">{item.quote}</p>
                            <div className="quote-author">
                                <span className="author-role">{item.author}</span>
                                <span className="author-context">{item.context}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
