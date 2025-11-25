import Link from 'next/link'

export default function Contact() {
    return (
        <section id="contact" className="section contact-section">
            <div className="container">
                <h2 className="section-title">Get In Touch</h2>
                <div className="contact-content">
                    <p>새로운 기회와 협업에 대해 언제든 열려있습니다.</p>
                    <a href="mailto:kimmfran@gmail.com" className="contact-email">kimmfran@gmail.com</a>
                    <div className="social-links">
                        <Link href="#" target="_blank" className="social-link">LinkedIn</Link>
                    </div>
                </div>
            </div>
        </section>
    )
}
