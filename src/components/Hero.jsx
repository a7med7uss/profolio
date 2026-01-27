import React, { useEffect, useState } from 'react';
import { Download, Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
    const [text, setText] = useState('');
    const fullText = "Cybersecurity Enthusiast";

    useEffect(() => {
        let index = 0;
        const interval = setInterval(() => {
            setText(fullText.slice(0, index + 1));
            index++;
            if (index > fullText.length) clearInterval(interval);
        }, 100);
        return () => clearInterval(interval);
    }, []);

    return (
        <section style={{
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            paddingTop: '80px',
            position: 'relative',
            overflow: 'hidden'
        }}>
            {/* Background Glow */}
            <div style={{
                position: 'absolute',
                top: '20%',
                right: '10%',
                width: '500px',
                height: '500px',
                background: 'radial-gradient(circle, rgba(99, 102, 241, 0.15) 0%, rgba(0,0,0,0) 70%)',
                borderRadius: '50%',
                filter: 'blur(50px)',
                zIndex: -1
            }} />

            <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
                <div>
                    <span style={{
                        color: 'var(--text-accent)',
                        fontWeight: 600,
                        letterSpacing: '2px',
                        textTransform: 'uppercase',
                        marginBottom: '1rem',
                        display: 'block'
                    }}>
                        Hello, I'm
                    </span>
                    <h1 style={{
                        fontSize: '4.5rem',
                        marginBottom: '1rem',
                        lineHeight: 1.1,
                        letterSpacing: '-1px'
                    }}>
                        Ahmed <br />
                        <span className="gradient-text">Hussein</span>
                    </h1>
                    <h2 style={{
                        fontSize: '1.5rem',
                        color: 'var(--text-muted)',
                        marginBottom: '2rem',
                        fontFamily: 'var(--font-body)',
                        fontWeight: 400,
                        display: 'flex',
                        alignItems: 'center',
                        gap: '10px'
                    }}>
                        &gt; {text}<span style={{ animation: 'blink 1s infinite' }}>|</span>
                    </h2>

                    <p style={{ color: 'var(--text-muted)', marginBottom: '2.5rem', maxWidth: '500px' }}>
                        Computer Science Undergraduate & Cybersecurity Specialist.
                        Building secure, robust, and scalable digital solutions.
                    </p>

                    <div style={{ display: 'flex', gap: '1rem' }}>
                        <a href="mailto:a7med7uss77@gmail.com" className="btn-primary" style={{ textDecoration: 'none', display: 'inline-block' }}>
                            Let's Connect
                        </a>
                        <a href="/AhmedHussein_CV.pdf" download style={{ textDecoration: 'none' }}>
                            <button className="glass-card" style={{
                                padding: '0.75rem 1.5rem',
                                cursor: 'pointer',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '8px',
                                background: 'rgba(255, 255, 255, 0.1)',
                                border: '1px solid rgba(255, 255, 255, 0.3)',
                                color: '#fff',
                                fontWeight: 500
                            }}>
                                <Download size={18} /> Resume
                            </button>
                        </a>
                    </div>

                    <div style={{ marginTop: '3rem', display: 'flex', gap: '1.5rem' }}>
                        <a href="https://github.com/a7med7uss" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-muted)', transition: 'color 0.2s' }}><Github /></a>
                        <a href="https://www.linkedin.com/in/ahmed-hussein-98bb14336" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-muted)', transition: 'color 0.2s' }}><Linkedin /></a>
                        <a href="mailto:a7med7uss77@gmail.com" style={{ color: 'var(--text-muted)', transition: 'color 0.2s' }}><Mail /></a>
                    </div>
                </div>

                <div style={{ position: 'relative' }}>
                    {/* Abstract Tech Visual */}
                    <div className="glass-card" style={{
                        height: '500px',
                        position: 'relative',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        overflow: 'hidden'
                    }}>
                        <div style={{
                            position: 'absolute',
                            inset: 0,
                            background: 'linear-gradient(45deg, rgba(99,102,241,0.1), rgba(168,85,247,0.1))',
                            zIndex: 0
                        }} />
                        <code style={{
                            fontFamily: 'monospace',
                            color: 'var(--text-muted)',
                            fontSize: '0.9rem',
                            zIndex: 1,
                            textAlign: 'left'
                        }}>
                            <span style={{ color: '#c084fc' }}>const</span> <span style={{ color: '#fff' }}>securityExpert</span> = {'{'}<br />
                            &nbsp;&nbsp;name: <span style={{ color: '#818cf8' }}>'Ahmed Hussein'</span>,<br />
                            &nbsp;&nbsp;role: <span style={{ color: '#818cf8' }}>'Cybersecurity'</span>,<br />
                            &nbsp;&nbsp;skills: [<br />
                            &nbsp;&nbsp;&nbsp;&nbsp;<span style={{ color: '#818cf8' }}>'Penetration Testing'</span>,<br />
                            &nbsp;&nbsp;&nbsp;&nbsp;<span style={{ color: '#818cf8' }}>'Network Security'</span>,<br />
                            &nbsp;&nbsp;&nbsp;&nbsp;<span style={{ color: '#818cf8' }}>'Ethical Hacking'</span><br />
                            &nbsp;&nbsp;]<br />
                            {'}'};
                        </code>
                    </div>
                </div>
            </div>
            <style>{`
        @keyframes blink { 50% { opacity: 0; } }
      `}</style>
        </section>
    );
};

export default Hero;
