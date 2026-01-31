import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Smartphone } from 'lucide-react';

const projects = [
    {
        title: "Shop App",
        description: "A full-featured e-commerce application with product listing, cart functionality, and user authentication.",
        image: "/projects covers/shop.png",
        gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        tech: ["Flutter", "Firebase", "State Management"],
        links: {
            demo: "#",
            github: "#"
        }
    },
    {
        title: "News App",
        description: "Real-time news aggregator fetching global headlines with category filtering and search capabilities.",
        image: "/projects covers/news.png",
        gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
        tech: ["Flutter", "API Integration", "Clean Architecture"],
        links: {
            demo: "#",
            github: "#"
        }
    },
    {
        title: "To Do App",
        description: "Smart task management tool with categories, reminders, and data persistence for productivity.",
        image: "/projects covers/To Do App.png",
        gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
        tech: ["Flutter", "Local Storage", "UI/UX"],
        links: {
            demo: "#",
            github: "#"
        }
    }
];

const ProjectCard = ({ project, index }) => (
    <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        viewport={{ once: true }}
        className="glass-card"
        style={{
            display: 'flex',
            flexDirection: 'column',
            overflow: 'hidden',
            height: '100%',
            position: 'relative'
        }}
    >
        {/* Project Image */}
        <div style={{
            position: 'relative',
            height: '250px',
            background: project.gradient,
            overflow: 'hidden'
        }}>
            <img
                src={project.image}
                alt={project.title}
                onError={(e) => {
                    // Fallback to gradient with icon if image fails to load
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                }}
                style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'contain',
                    transition: 'transform 0.3s ease'
                }}
                className="project-image"
            />
            {/* Fallback content */}
            <div style={{
                display: 'none',
                position: 'absolute',
                inset: 0,
                alignItems: 'center',
                justifyContent: 'center',
                background: project.gradient
            }}>
                <Smartphone size={80} style={{
                    color: 'rgba(255, 255, 255, 0.9)',
                    filter: 'drop-shadow(0 4px 6px rgba(0,0,0,0.3))'
                }} />
            </div>
            {/* Hover overlay */}
            <div className="project-overlay" style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(to top, rgba(0,0,0,0.7), transparent)',
                opacity: 0,
                transition: 'opacity 0.3s ease'
            }} />
        </div>

        <div style={{ padding: '1.5rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
            <h3 style={{
                marginBottom: '0.5rem',
                fontSize: '1.5rem',
                color: 'white',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem'
            }}>
                {project.title}
            </h3>

            <p style={{
                color: 'var(--text-muted)',
                marginBottom: '1rem',
                fontSize: '0.95rem',
                flex: 1,
                lineHeight: '1.6'
            }}>
                {project.description}
            </p>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1.5rem' }}>
                {project.tech.map((tech, i) => (
                    <span key={i} style={{
                        background: 'rgba(99, 102, 241, 0.1)',
                        color: '#a855f7',
                        padding: '0.25rem 0.75rem',
                        borderRadius: '999px',
                        fontSize: '0.75rem',
                        fontWeight: 500,
                        border: '1px solid rgba(168, 85, 247, 0.2)'
                    }}>
                        {tech}
                    </span>
                ))}
            </div>

            <div style={{ display: 'flex', gap: '1rem', marginTop: 'auto' }}>
                <a
                    href={project.links.github}
                    className="project-link"
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        color: 'var(--text-muted)',
                        textDecoration: 'none',
                        fontSize: '0.9rem',
                        transition: 'color 0.2s'
                    }}
                >
                    <Github size={18} /> Code
                </a>
                <a
                    href={project.links.demo}
                    className="project-link"
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        color: 'var(--text-accent)',
                        textDecoration: 'none',
                        fontSize: '0.9rem',
                        transition: 'color 0.2s'
                    }}
                >
                    <ExternalLink size={18} /> Live Demo
                </a>
            </div>
        </div>

        <style>{`
            .glass-card:hover .project-image {
                transform: scale(1.05);
            }
            .glass-card:hover .project-overlay {
                opacity: 1;
            }
            .project-link:hover {
                color: #fff !important;
                text-decoration: underline;
            }
        `}</style>
    </motion.div>
);

const Projects = () => {
    return (
        <section id="projects" style={{ padding: '6rem 0', position: 'relative' }}>
            {/* Background Glow */}
            <div style={{
                position: 'absolute',
                top: '20%',
                left: '50%',
                transform: 'translateX(-50%)',
                width: '600px',
                height: '600px',
                background: 'radial-gradient(circle, rgba(168, 85, 247, 0.1) 0%, rgba(0,0,0,0) 70%)',
                borderRadius: '50%',
                filter: 'blur(60px)',
                zIndex: -1
            }} />

            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    style={{ textAlign: 'center', marginBottom: '4rem' }}
                >
                    <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>
                        Featured <span className="gradient-text">Projects</span>
                    </h2>
                    <p style={{ color: 'var(--text-muted)', maxWidth: '600px', margin: '0 auto', lineHeight: '1.8' }}>
                        A showcase of my recent mobile development work, focusing on performance, security, and user experience.
                    </p>
                </motion.div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                    gap: '2rem',
                    marginBottom: '3rem'
                }}>
                    {projects.map((project, index) => (
                        <ProjectCard key={index} project={project} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
