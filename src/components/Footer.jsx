import React from 'react';

const Footer = () => {
    return (
        <footer style={{
            padding: '2rem 0',
            borderTop: '1px solid rgba(255,255,255,0.05)',
            textAlign: 'center',
            color: 'var(--text-muted)',
            fontSize: '0.9rem'
        }}>
            <div className="container">
                <p>© {new Date().getFullYear()} Ahmed Hussein. All rights reserved.</p>

            </div>
        </footer>
    );
};

export default Footer;
