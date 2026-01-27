import React from 'react';
import { Award } from 'lucide-react';

const Certificates = () => {
    const certs = [
        "Network Fundamentals Course (Level 1 & Level 2)",
        "Flutter Development Course (Level 1 & Level 2)",
        "Network Security Fundamentals",
        "Wireless Penetration Testing",
        "RAT-based Penetration Testing",
        "Social Engineering Basics"
    ];

    return (
        <section id="certificates" style={{ padding: '4rem 0 8rem 0' }}>
            <div className="container">
                <h2 style={{ fontSize: '3rem', marginBottom: '3rem' }}>
                    Certifications
                </h2>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
                    {certs.map((cert) => (
                        <div key={cert} className="glass-card" style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                            <div style={{
                                background: 'rgba(99, 102, 241, 0.1)',
                                padding: '12px',
                                borderRadius: '50%',
                                color: '#818cf8'
                            }}>
                                <Award size={24} />
                            </div>
                            <div>
                                <h4 style={{ fontSize: '1rem', lineHeight: '1.4' }}>{cert}</h4>
                                <span style={{ fontSize: '0.8rem', color: 'var(--text-accent)', display: 'block', marginTop: '4px' }}>Certified</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Certificates;
