import React from 'react'
import { Link } from 'react-router'
import './landing.scss'

const Landing = () => {
    return (
        <main className='landing-page'>
            <section className='landing-hero'>
                <h1>Ace Your Next Interview with <span className='highlight'>AI</span></h1>
                <p>
                    Upload your resume and a job description — get a personalized interview
                    strategy, likely questions, and a prep plan in under a minute.
                </p>
                <div className='landing-actions'>
                    <Link to='/register' className='button primary-button'>Get Started Free</Link>
                    <Link to='/login' className='button secondary-button'>Log In</Link>
                </div>
            </section>

            <section className='landing-features'>
                <div className='feature'>
                    <h3>Resume Analysis</h3>
                    <p>We match your background against the job description automatically.</p>
                </div>
                <div className='feature'>
                    <h3>Tailored Questions</h3>
                    <p>Get technical and behavioral questions specific to the role.</p>
                </div>
                <div className='feature'>
                    <h3>Prep Plan</h3>
                    <p>A clear plan to close your skill gaps before the interview.</p>
                </div>
            </section>

            <footer className='landing-footer'>
                <a href='#'>Privacy Policy</a>
                <a href='#'>Terms of Service</a>
                <a href='#'>Help Center</a>
            </footer>
        </main>
    )
}

export default Landing