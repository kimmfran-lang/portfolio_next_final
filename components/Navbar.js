import Link from 'next/link'

export default function Navbar() {
    return (
        <nav className="navbar">
            <div className="container nav-container">
                <Link href="#hero" className="logo">FRAN.</Link>
                <ul className="nav-links">
                    <li><Link href="#about">About</Link></li>
                    <li><Link href="#experience">Experience</Link></li>
                    <li><Link href="#projects">Projects</Link></li>
                    <li><Link href="#contact">Contact</Link></li>
                </ul>
                <div className="hamburger">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
        </nav>
    )
}
