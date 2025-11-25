'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function Hero() {
    const [text, setText] = useState('')
    const [isDeleting, setIsDeleting] = useState(false)
    const [loopNum, setLoopNum] = useState(0)
    const [typingSpeed, setTypingSpeed] = useState(150)

    const roles = ["Product Manager", "Problem Solver", "Communicator"]

    useEffect(() => {
        const handleTyping = () => {
            const i = loopNum % roles.length
            const fullText = roles[i]

            setText(isDeleting
                ? fullText.substring(0, text.length - 1)
                : fullText.substring(0, text.length + 1)
            )

            setTypingSpeed(isDeleting ? 30 : 150)

            if (!isDeleting && text === fullText) {
                setTimeout(() => setIsDeleting(true), 2000)
            } else if (isDeleting && text === '') {
                setIsDeleting(false)
                setLoopNum(loopNum + 1)
            }
        }

        const timer = setTimeout(handleTyping, typingSpeed)
        return () => clearTimeout(timer)
    }, [text, isDeleting, loopNum, roles, typingSpeed])

    return (
        <section id="hero" className="hero-section">
            <div className="container hero-content">
                <h2 className="hero-greeting">Hi there 👋, I'm</h2>
                <h1 className="hero-name">KIM DONG HYEON (Fran)</h1>
                <div className="hero-role-wrapper">
                    <span className="hero-role-static">I am a </span>
                    <span className="hero-role-dynamic">{text}</span>
                </div>
                <p className="hero-description">
                    B2C 커머스 및 O2O 플랫폼 전문 8년차 프로덕트 매니저.<br />
                    데이터 기반 의사결정과 원활한 API 연동을 통해 비즈니스 성장을 주도합니다.
                </p>
                <div className="hero-cta">
                    <Link href="#projects" className="btn btn-primary">View Projects</Link>
                    <Link href="#contact" className="btn btn-secondary">Contact Me</Link>
                </div>
            </div>
            <div className="hero-background">
                <div className="blob blob-1"></div>
                <div className="blob blob-2"></div>
            </div>
        </section>
    )
}
