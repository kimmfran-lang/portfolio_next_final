import Link from 'next/link'

export default function Navbar() {
    return (
        <nav className="navbar">
            <div className="nav-container">
                <Link href="#hero" className="logo">FRAN.</Link>

                <div className="hamburger">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
        </nav>
    )
}
