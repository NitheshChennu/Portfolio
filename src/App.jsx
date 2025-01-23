import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Github, Gitlab, Linkedin, Mail, Phone, Menu, X, Award, Code, Database, Terminal, Globe, Cpu, Server, Palette, Wrench } from 'lucide-react';
import Resume from './pages/Resume';
import Experience from './pages/Experience';
import Education from './pages/Education';
import profile from './assets/images/profile.jpg';
function Home() {
  return (
    <>
      <section className="hero">
        <div className="hero-content">
          <div className="profile-image-container">
            <img 
              src={profile} 
              alt="Profile" 
              className="hero-profile-img"
            />
          </div>
          <h1 className="hero-title">Nithesh Kumar Reddy Chennu</h1>
          <p className="hero-subtitle">Frontend Developer</p>
        </div>
      </section>

      <section id="about" className="about">
        <div className="container about-grid">
          <img 
            src="https://bootcamprankings.com/wp-content/uploads/2021/01/How-to-Learn-Web-Development-768x763.png" 
            alt="About Me" 
            className="profile-img"
          />
          <div className="about-content">
            <h2>LET ME INTRODUCE MYSELF</h2>
            <p>I fell in love with frontend development and enjoy creating intuitive, high-performance user interfaces.</p>
            <p>I specialize in ReactJS and am fluent in modern web technologies like JavaScript and CSS.</p>
            <p>My field of Interest's are building are developing new web applications and crafting user-friendly designs.</p>
            <p>Whenever possible, I channel my passion into creating seamless products with frameworks like React.js and Next.js</p>
          </div>
        </div>
      </section>

      <section id="skills" className="skills">
        <div className="container">
          <h2>Skills & Expertise</h2>
          <div className="skills-container">
            <div className="skill-category">
              <div className="skill-icon">
                <Code />
              </div>
              <h3>Technical Languages</h3>
              <div className="skill-items">
                <div className="skill-item">
                  <span className="skill-name">JavaScript</span>
                  <div className="skill-bar">
                    <div className="skill-progress" style={{ width: '85%' }}></div>
                  </div>
                </div>
                <div className="skill-item">
                  <span className="skill-name">TypeScript</span>
                  <div className="skill-bar">
                    <div className="skill-progress" style={{ width: '88%' }}></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="skill-category">
              <div className="skill-icon">
                <Server />
              </div>
              <h3>Development</h3>
              <div className="skill-items">
              <div className="skill-item">
                  <span className="skill-name">React</span>
                </div>
                <div className="skill-item">
                  <span className="skill-name">HTML</span>
                </div>
                <div className="skill-item">
                  <span className="skill-name">CSS</span>
                </div>
                <div className="skill-item">
                  <span className="skill-name">Bootstrap</span>
                </div>
                <div className="skill-item">
                  <span className="skill-name">WebPack</span>
                </div>
                <div className="skill-item">
                  <span className="skill-name">Node.js</span>
                </div>
                <div className="skill-item">
                  <span className="skill-name">Express.js</span>
                </div>
              </div>
            </div>

            <div className="skill-category">
              <div className="skill-icon">
                <Database />
              </div>
              <h3>Databases</h3>
              <div className="skill-items">
                <div className="skill-item">
                  <span className="skill-name">MySQL</span>
                </div>
                <div className="skill-item">
                  <span className="skill-name">MongoDB</span>
                </div>
              </div>
            </div>

            <div className="skill-category">
              <div className="skill-icon">
                <Wrench />
              </div>
              <h3>DevOps & Tools</h3>
              <div className="skill-items">
                <div className="skill-item">
                  <span className="skill-name">Jenkins</span>
                </div>
                <div className="skill-item">
                  <span className="skill-name">AWS</span>
                </div>
                <div className="skill-item">
                  <span className="skill-name">CI/CD</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="projects">
        <div className="container">
          <h2>Featured Projects</h2>
          <div className="projects-grid">
          <div className="project-card">
              <h3>ClassNext by SRM</h3>
              <span className="project-duration">2025</span>
              <p className="project-skills">ReactJS, TypeScript, Material UI</p>
              <div className="project-description">
                <ul>
                  <li>Built a task management system for organizing and tracking academic tasks</li>
                  <li>Enabled collaboration through idea sharing and resource access</li>
                  <li>Improved organization with daily activity updates for students</li>
                </ul>
              </div>
            </div>
            <div className="project-card">
              <h3>Travel Recommendation Assistance</h3>
              <span className="project-duration">2024</span>
              <p className="project-skills">ReactJS, TypeScript, Redux</p>
              <div className="project-description">
                <ul>
                  <li>Built a travel platform for sharing experiences and recommending destinations</li>
                  <li>Added features like maps, itinerary planning, and a blog for insights</li>
                  <li>Integrated social tools for messaging, events, and admin management</li>
                </ul>
              </div>
            </div>
            <div className="project-card">
              <h3>E-Commerce Website</h3>
              <span className="project-duration">2024</span>
              <p className="project-skills">ReactJS, MongoDB, Node,js, Express.js</p>
              <div className="project-description">
                <ul>
                  <li>Built a scalable e-commerce platform</li>
                  <li>Implemented secure payment processing</li>
                  <li>Optimized performance and user experience</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="experience" className="experience-section">
        <Experience />
      </section>

      <section id="education" className="education-section">
        <Education />
      </section>

      <section id="certifications" className="certifications">
  <div className="container">
    <h2>Certifications</h2>
    <div className="certifications-grid">
      <a
        style={{textDecoration: 'none'}}
        href="https://drive.google.com/file/d/1rQ_hAg3K3qAJhu9y16b9HEr_DfggAunp/view?usp=drivesdk"
        target="_blank"
        rel="noopener noreferrer"
        className="certification-card"
      >
        <div className="certification-icon">
          <Award />
        </div>
        <h3>Full Stack Development Internship</h3>
        <p>Innobyte Services</p>
      </a>
      <a
        style={{textDecoration: 'none'}}
        href="https://drive.google.com/file/d/1Zcp_Q4TzEwIg7AU6YQDB5lJNgegucr6G/view?usp=drivesdk"
        target="_blank"
        rel="noopener noreferrer"
        className="certification-card"
      >
        <div className="certification-icon">
          <Award />
        </div>
        <h3>Full Stack Development</h3>
        <p>NSE TalentSprint</p>
      </a>
      <a
        style={{textDecoration: 'none'}}
        href="https://www.linkedin.com/learning/certificates/48d2266bf49006e592e8f00946f8fd3527b6bc462b14481d7f5f380312137d5f"
        target="_blank"
        rel="noopener noreferrer"
        className="certification-card"
      >
        <div className="certification-icon">
          <Award />
        </div>
        <h3>TypeScript Essential Training</h3>
        <p>LinkedIn</p>
      </a>
      <a
        style={{textDecoration: 'none'}}
        href="https://www.linkedin.com/learning/certificates/c5406fe5ddb1d241c77f90779ca5586a4529399721a2484088c9f13d3065f64f"
        target="_blank"
        rel="noopener noreferrer"
        className="certification-card"
      >
        <div className="certification-icon">
          <Award />
        </div>
        <h3>Continuous Integration and Continuous Delivery with GitLab</h3>
        <p>LinkedIn</p>
      </a>
    </div>
  </div>
</section>


      <section id="contact" className="contact">
        <div className="container">
          <h2>Get In Touch</h2>
          <div className="social-links">
            <a href="https://github.com/NitheshChennu" target="_blank" rel="noopener noreferrer">
              <Github />
            </a>
            <a href="https://gitlab.com/nitheshkumar281" target="_blank" rel="noopener noreferrer">
              <Gitlab />
            </a>
            <a href="https://www.linkedin.com/in/nithesh-kumar-reddy-chennu-7a9971226" target="_blank" rel="noopener noreferrer">
              <Linkedin />
            </a>
            <a href="mailto:nitheshkumar281@gmail.com">
              <Mail />
            </a>
            <a href="tel:+91 9666212958">
              <Phone />
            </a>
          </div>
          <Link to="/resume" className="resume-button">
      Resume
      <span className="arrow">➤</span>
    </Link>
          
        </div>
      </section>
    </>
  );
}

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <Router>
      <header className="header">
        <nav className="nav container">
          <div className="logo"><Link to="/"> &lt;NitheshChennu /&gt; </Link></div>
          <div className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
            <Link to="/" onClick={closeMenu}>Home</Link>
            {/* <a href="/#about" onClick={closeMenu}>About</a> */}
            <a href="/#projects" onClick={closeMenu}>Projects</a>
            {/* <a href="/#experience" onClick={closeMenu}>Experience</a> */}
            {/* <a href="/#education" onClick={closeMenu}>Education</a> */}
            <a href="/#certifications" onClick={closeMenu}>Certifications</a>
            <Link to="/resume" onClick={closeMenu}>Resume</Link>
            <a href="/#contact" onClick={closeMenu}>Contact</a>
          </div>
          <button className="mobile-menu" onClick={toggleMenu} aria-label="Toggle menu">
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </nav>
      </header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/resume" element={<Resume />} />
      </Routes>
    </Router>
  );
}

export default App;