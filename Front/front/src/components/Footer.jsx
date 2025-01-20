import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';

function Footer() {
  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        
    
        <div style={styles.column}>
          <h4 style={styles.subTitle}>Follow me</h4>
          <div style={styles.socialIcons}>
            <a href="https://github.com/Adem-Hassen"   target="_blank" rel="noopener noreferrer" style={styles.icon}><i className="fab fa-github"></i></a>
            <a href="https://www.linkedin.com/in/adem-hassen/"   target="_blank" rel="noopener noreferrer" style={styles.icon}><i className="fab fa-linkedin"></i></a>
           
          </div>
        </div>
      </div>
      <div style={styles.bottom}>
        <p style={styles.bottomText}>
          © {new Date().getFullYear()}CarHub. All rights reserved.
        </p>
      </div>
    </footer>
  );
} 

const styles = {
  footer: {
    backgroundColor: ' #d18726',
    color: '#080808',
    padding: '30px 20px',
    marginTop: "20%",
    textAlign: 'center',
  },
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    maxWidth: '1000px',
    margin: '0 auto',
  },
  column: {
    flex: '1',
    margin: '10px',
    minWidth: '200px',
  },
  title: {
    fontSize: '1.5rem',
    marginBottom: '10px',
  },
  text: {
    fontSize: '0.9rem',
    color: "#080808",
  },
  subTitle: {
    fontSize: '1.2rem',
    marginBottom: '10px',
  },
  links: {
    listStyle: 'none',
    padding: 0,
  },
  link: {
    color: '#080808',
    textDecoration: 'none',
    fontSize: '0.9rem',
    display: 'block',
    margin: '5px 0',
  },
  socialIcons: {
    backgroundColor:"080808",
    display: 'flex',
    justifyContent: 'center',
    gap: '15px',
  },
  icon: {
    fontSize: '1.5rem',
    color: '#080808',
    textDecoration: 'none',
  },
  bottom: {
    borderTop: '1px solid #080808',
    marginTop: '20px',
    paddingTop: '10px',
  },
  bottomText: {
    fontSize: '0.8rem',
    color: '#080808',
  },
};

export default Footer;
