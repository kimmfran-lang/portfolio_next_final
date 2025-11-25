import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Experience from '@/components/Experience'
import Projects from '@/components/Projects'
import Testimonials from '@/components/Testimonials'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import { getProjects, getTestimonials } from '@/lib/notion'

// Force dynamic rendering to ensure latest data is fetched on every request (or use revalidate)
export const revalidate = 60; // Revalidate every 60 seconds

export default async function Home() {
    const projects = await getProjects()
    const testimonials = await getTestimonials()

    return (
        <main>
            <Navbar />
            <Hero />
            <About />
            <Experience />
            <Projects projects={projects} />
            <Testimonials testimonials={testimonials} />
            <Contact />
            <Footer />
        </main>
    )
}
