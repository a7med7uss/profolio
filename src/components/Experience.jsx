import React from 'react';
import { GraduationCap, Briefcase } from 'lucide-react';

const Experience = () => {
    return (
        <section id="experience" style={{ padding: '4rem 0' }}>
            <div className="container">
                <h2 style={{ fontSize: '3rem', marginBottom: '4rem' }}>
                    Experience & <span className="gradient-text">Education</span>
                </h2>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem' }}>

                    {/* Education Column */}
                    <div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
                            <div style={{ padding: '10px', background: 'var(--bg-card)', borderRadius: '12px' }}>
                                <GraduationCap size={24} color="#a855f7" />
                            </div>
                            <h3>Education</h3>
                        </div>

                        <div className="glass-card" style={{ padding: '2rem', borderLeft: '4px solid #a855f7' }}>
                            <span style={{ color: 'var(--text-accent)', fontSize: '0.9rem', fontWeight: 600 }}>Sep 2022 – Sep 2026</span>
                            <h4 style={{ fontSize: '1.4rem', marginTop: '0.5rem' }}>Bachelor’s Computer Science</h4>
                            <p style={{ color: 'var(--text-muted)', marginTop: '0.5rem' }}>Thebes Higher Institute of Computer & Management Sciences</p>
                        </div>
                    </div>

                    {/* Experience Column */}
                    <div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
                            <div style={{ padding: '10px', background: 'var(--bg-card)', borderRadius: '12px' }}>
                                <Briefcase size={24} color="#6366f1" />
                            </div>
                            <h3>Experience</h3>
                        </div>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                            <div className="glass-card" style={{ padding: '2rem', borderLeft: '4px solid #6366f1' }}>
                                <span style={{ color: '#6366f1', fontSize: '0.9rem', fontWeight: 600 }}>Currently</span>
                                <h4 style={{ fontSize: '1.2rem', marginTop: '0.5rem' }}>Trainee - Flutter Mobile Development</h4>
                                <p style={{ color: 'var(--text-muted)', marginTop: '0.5rem' }}>NTI (National Telecommunication Institute)</p>
                            </div>

                            <div className="glass-card" style={{ padding: '2rem', borderLeft: '4px solid #6366f1' }}>
                                <span style={{ color: '#6366f1', fontSize: '0.9rem', fontWeight: 600 }}>2022 – Present</span>
                                <h4 style={{ fontSize: '1.2rem', marginTop: '0.5rem' }}>Cybersecurity Training</h4>
                                <p style={{ color: 'var(--text-muted)', marginTop: '0.5rem' }}>Self-Driven Projects & CTF Participation</p>
                                <ul style={{ color: 'var(--text-muted)', marginTop: '1rem', marginLeft: '1rem', fontSize: '0.9rem' }}>
                                    <li>Designed cybersecurity tools in Python</li>
                                    <li>Participated in ECPC</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Experience;
