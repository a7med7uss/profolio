import React from 'react';

const SkillCategory = ({ title, skills }) => (
    <div className="glass-card">
        <h3 style={{ marginBottom: '1.5rem', fontSize: '1.2rem' }}>{title}</h3>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.8rem' }}>
            {skills.map((skill) => (
                <span key={skill} style={{
                    padding: '0.5rem 1rem',
                    background: 'rgba(255,255,255,0.05)',
                    borderRadius: '50px',
                    fontSize: '0.9rem',
                    border: '1px solid rgba(255,255,255,0.1)',
                    color: 'var(--text-main)',
                    transition: 'all 0.2s',
                    cursor: 'default'
                }}
                    onMouseEnter={(e) => {
                        e.target.style.background = 'var(--primary-gradient)';
                        e.target.style.borderColor = 'transparent';
                    }}
                    onMouseLeave={(e) => {
                        e.target.style.background = 'rgba(255,255,255,0.05)';
                        e.target.style.borderColor = 'rgba(255,255,255,0.1)';
                    }}
                >
                    {skill}
                </span>
            ))}
        </div>
    </div>
);

const Skills = () => {
    const categories = [
        {
            title: "Programming",
            skills: ["C++", "Python", "Java", "Dart", "HTML", "CSS", "JavaScript", "Flutter"]
        },
        {
            title: "Cybersecurity Tools",
            skills: ["Metasploit", "Nmap", "Wireshark", "Burp Suite", "Kali Linux Tools"]
        },
        {
            title: "Operating Systems",
            skills: ["Kali Linux (Intermediate)", "Windows (Proficient)", "Linux Administration"]
        },
        {
            title: "Core Competencies",
            skills: ["Vulnerability Scanning", "Network Security", "Ethical Hacking", "Social Engineering", "Mobile App Dev"]
        }
    ];

    return (
        <section id="skills" style={{ padding: '4rem 0' }}>
            <div className="container">
                <h2 style={{ fontSize: '3rem', marginBottom: '3rem', textAlign: 'center' }}>
                    Technical <span className="gradient-text">Skills</span>
                </h2>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '2rem' }}>
                    {categories.map((cat) => (
                        <SkillCategory key={cat.title} title={cat.title} skills={cat.skills} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
