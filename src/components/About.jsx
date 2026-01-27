import React from 'react';

const About = () => {
    return (
        <section id="about" style={{ padding: '8rem 0', position: 'relative' }}>
            <div className="container">
                <h2 style={{ fontSize: '3rem', marginBottom: '3rem', position: 'relative', display: 'inline-block' }}>
                    About <span className="gradient-text">Me</span>
                </h2>

                <div className="glass-card">
                    <p style={{ fontSize: '1.2rem', color: 'var(--text-muted)', marginBottom: '2rem' }}>
                        I am a dedicated <strong>Cybersecurity Enthusiast</strong> and Computer Science student with substantial knowledge in networks,
                        programming, ethical hacking, and hands-on security labs. My journey involves a strong focus on analytical skills,
                        network protection, and modern cyber defense practices.
                    </p>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem' }}>
                        <div>
                            <h3 style={{ color: 'var(--text-main)', marginBottom: '0.5rem' }}>Location</h3>
                            <p style={{ color: 'var(--text-muted)' }}>Cairo, Egypt</p>
                        </div>
                        <div>
                            <h3 style={{ color: 'var(--text-main)', marginBottom: '0.5rem' }}>Email</h3>
                            <p style={{ color: 'var(--text-muted)' }}>a7med7uss77@gmail.com</p>
                        </div>
                        <div>
                            <h3 style={{ color: 'var(--text-main)', marginBottom: '0.5rem' }}>Phone</h3>
                            <p style={{ color: 'var(--text-muted)' }}>+201030612376</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
