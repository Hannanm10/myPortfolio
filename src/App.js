import React, {useState} from 'react';
import { FaDownload, FaLinkedin, FaGithub, FaEnvelope, FaBriefcase, FaGraduationCap, FaCode, FaLaptopCode, FaAtom, FaProjectDiagram, FaPhoneAlt, FaBars, FaTimes} from 'react-icons/fa';
import './App.css';

function App() {

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const skills = {
    Languages: ['Python', 'C++', 'C#', 'SQL','LaTeX'],
    'Web Development': ['HTML/CSS', 'JavaScript', 'React.js', 'Node.js', '.NET', 'Full Stack Development', 'Responsive Design'],
    'AI/ML': ['Scikit-learn', 'TensorFlow', 'Keras', 'XGBoost', 'Model Evaluation'],
    'Data Science': ['Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'Data Analysis'],
    'Mobile Development': ['Android (Kotlin)', 'Jetpack'],
    Database: ['MySQL', 'PostgreSQL', 'MongoDB', 'Design & Optimization'],
    Tools: ['Git & GitHub', 'Visual Studio', 'VS Code', 'Android Studio', 'Google Colab', 'Canva', 'Jira', 'Slack'],
    'Programming Concepts': ['OOP', 'DSA'],
    'Soft Skills': ['Problem Solving', 'Team Collaboration', 'Adaptability', 'Management'],
  };

  return (
    <div className="portfolio">
      {/* Navbar */}
      <nav>
        <div className="nav-brand">
          <a>Hannan Mushtaq</a>
        </div>
        
        <div className={`nav-links ${isOpen ? 'active' : ''}`}>
          <a href="#about">About Me</a>
          <a href="#education">Education</a>
          <a href="#experience">Experience</a>
          <a href="#resume">Résumé</a>
          <a href="#skills">Skills</a>
          <a href="#services">Services</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
        
        <button className="menu-toggle" onClick={toggleMenu}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero">
        <img src="/profile.jpg" alt="Your Name" className="profile-img" />
        <h1>Hannan Mushtaq</h1>
        <p>Creative Developer & Computer Science Student</p>
      </section>

      {/* About Me */}
      <section id="about" className="section">
        <h2><FaCode /> About Me</h2>
        <p>Hello! I'm a passionate Computer Science student who's into software development, especially when it comes to solving real-world problems with clean, efficient code. Always exploring new technologies and looking for ways to level up my skills. With a creative and focused mindset, I continuously seek for different opportunities to contribute meaningfully to innovation and the betterment of society through technology.</p>
      </section>
      
      {/* Education */}
      <section id="education" className="section">
        <h2><FaGraduationCap /> Education</h2>
        <div className="timeline">
          <div className="timeline-item">
            <h3>University of Engineering & Technology, Lahore</h3>
            <p className="timeline-date">B.Sc. Computer Science | 2023 - 2027 (Expected)</p>
            <p>Current CGPA: 3.74</p>
          </div>
          <div className="timeline-item">
            <h3>Government College University, Lahore</h3>
            <p className="timeline-date">F.Sc. Pre-Engineering | 2021 - 2023</p>
            <p>Grade: A</p>
          </div>
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="section">
        <h2><FaBriefcase /> Experience</h2>
        <div className="timeline">
          <div className="timeline-item">
            <h3>Summer Intern</h3>
            <p className="timeline-date">Ustadam | June 2024 - August 2024</p>
            <ul>
              <li>Odoo Development</li>
              <li>Project Management & Teamwork</li>
              <li>Jira & Slack</li>
            </ul>
          </div>
          <div className="timeline-item">
            <h3>Teaching Assistant</h3>
            <p className="timeline-date">Computer Science Department | October 2024 - May 2025</p>
            <ul>
              <li>Programming Fundamentals (C++, Problem Solving)</li>
              <li>Object Oriented Programming (C#)</li>
              <li>DBMS (SQL, MySQL)</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Resume/CV */}
      <section id="resume" className="section">
        <h2><FaDownload /> My Résumé</h2>
        <div className="resume-download">
          <a href="/resume.pdf" download className="download-btn">
            Download Résumé <FaDownload />
          </a>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="section">
        <h2><FaLaptopCode /> Skills</h2>
        <div className="skills-list-container">
          {Object.entries(skills).map(([category, skillList], index) => (
            <div key={index} className="skill-category">
              <h3 className="skill-heading">{category}</h3>
              <div className="skill-tags">
                {skillList.map((skill, i) => (
                <span key={i} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Services */}
      <section id="services" className="section">
        <h2><FaAtom />Services</h2>
        <div className="services-grid">
          <div className="service-card">
            <h3>Custom Web Development</h3>
            <p>Design and develop responsive and dynamic websites using modern frameworks.</p>
          </div>
          <div className="service-card">
            <h3>AI & Machine Learning Solutions</h3>
            <p>Build intelligent models for prediction, classification, and automation tasks.</p>
          </div>
          <div className="service-card">
            <h3>Android App Development</h3>
            <p>Design and build complete, modern and user-friendly mobile apps with integrated backend services and APIs that solve real-world problems.</p>
          </div>
          <div className="service-card">
            <h3>.NET Development</h3>
            <p>Build scalable web applications and backend systems using ASP.NET Core and C#.</p>
          </div>
          <div className="service-card">
            <h3>Database Design & Management</h3>
            <p>Structure, optimize, and maintain relational and NoSQL databases for performance and reliability.</p>
          </div>
          <div className="service-card">
            <h3>Technical & Content Writing</h3>
            <p>Deliver well-researched technical documentation and engaging written content for digital platforms.</p>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="section">
        <h2><FaProjectDiagram />Projects</h2>
        {/* <p>A quick look at some projects I've enjoyed building.
          <br /><br />
        </p> */}
        <div className="project-grid">
          <div className="project-card">
            <div className="project-info">
              <h3>KarweDB - A Custom Database Management System</h3>
              <p>Built a simple CLI-Based custom Database Management System from scratch as part of a group project. Added components like Storage Engine, Query Processor, Indexing using BPlus Trees and Transaction Manager.
              <br /><br />-{'>'} C#, NoSQL, Data Structures, Database Design, OOP, Visual Studio, Collaboration
              </p>
              <a href="https://github.com/Ahmad-17R/DBMS.git" className="project-link" target="_blank" rel="noopener noreferrer">View Project</a>
            </div>
          </div>
          <div className="project-card">
            <div className="project-info">
              <h3>AI-Based Football Match Outcome Prediction</h3>
              <p>Trained different models on a feature-rich dataset for predicting football match outcomes using machine learning and some deep learning. Used ensemble models and compared performance of each model. Also, wrote an IEEE-style research paper for it.
              <br /><br />-{'>'} Python, Data Science, AI/ML, Google Colab, LaTeX
              </p>
              <a href="https://github.com/Hannanm10/Football-Match-Outcome-Prediction.git" className="project-link" target="_blank" rel="noopener noreferrer">View Project</a>
            </div>
          </div>
          <div className="project-card">
            <div className="project-info">
              <h3>Risk Reminder Security App</h3>
              <p>Developed an android app to show the usage information of sensitive permissions like camera, microphone & location by other apps. Major feature was monitoring camera usage on your android. Other features include regular security tips & reminder notifications and battery usage stats.
              <br /><br />-{'>'} Kotlin, Jetpack, Cybersecurity, Android Studio
              </p>
              <a href="https://github.com/Hannanm10/RiskReminderSecurityApp.git" className="project-link" target="_blank" rel="noopener noreferrer">View Project</a>
            </div>
          </div>
          <div className="project-card">
            <div className="project-info">
              <h3>UET Campus Navigation System</h3>
              <p>Built an interactive navigation system for navigating easily from one location to another across the UET campus. Graphs were used to represent the campus map and Dijkstra's algorithm was implemented for finding the shortest path. Routing history was also maintained.
              <br /><br />-{'>'} C#, Data Structures, Algorithms, Visual Studio, .NET, Collaboration
              </p>
              <a href="https://github.com/Hannanm10/Campus-Navigation-System.git" className="project-link" target="_blank" rel="noopener noreferrer">View Project</a>
            </div>
          </div>
          <div className="project-card">
            <div className="project-info">
              <h3>Klondike Solitaire</h3>
              <p>Developed a Klondike-style solitaire game using different data structures like stacks, queues, linked lists and dictionaries. Implemented card moves, game rules, scoring system, win condition and a user-friendly interface just like the game. Also added undo and redo features for better user experience. 
              <br /><br />-{'>'} C#, Data Structures, Visual Studio, .NET
              </p>
              <a href="https://github.com/Hannanm10/Klondike-Solitaire.git" className="project-link" target="_blank" rel="noopener noreferrer">View Project</a>
            </div>
          </div>
          <div className="project-card">
            <div className="project-info">
              <h3>Data Scraping & Sorting Project</h3>
              <p>Scraped data from a website using Python and BeautifulSoup, then implemented different algorithms like Bubble Sort, Merge Sort, and Quick Sort for sorting the data. The project also included visualizing the sorting process and comparing sorting algorithms.
              <br /><br />-{'>'} Python, Algorithms, Data Scraping, Visualization
              </p>
              <a href="https://github.com/Hannanm10/Data-Sorting-Scrapping-Project.git" className="project-link" target="_blank" rel="noopener noreferrer">View Project</a>
            </div>
          </div>
          <div className="project-card">
            <div className="project-info">
              <h3>Stadium Management System</h3>
              <p>Developed a basic system for managing tickets for a stadium as part of the Programming Fundamentals course, then extended it using OOP and DBMS to manage a whole stadium and added a user-friendly interface. Implemented features like match scheduling, and ticket booking. User authentication and authorization were also added.
              <br /><br />-{'>'} C++, C#, SQL, Database Design, OOP, DBMS, .NET, Visual Studio, SSMS, Windows Forms
              </p>
              <a href="https://github.com/Hannanm10/Stadium-Management-System.git" className="project-link" target="_blank" rel="noopener noreferrer">View Project</a>
            </div>
          </div>
          <div className="project-card">
            <div className="project-info">
              <h3>Personal Portfolio Website</h3>
              <p>This portfolio website is built using React.js and showcases my skills, projects, and experiences. It includes different sections for about me, education, experience, skills, services, projects, and contact information. Interactive elements and responsive design ensure a great user experience across devices and deployment is done using vercel.
              <br /><br />-{'>'} React.js, Node.js, HTML, CSS, JavaScript, Responsive Design, VS Code, Vercel
              </p>
              <a href="https://github.com/Hannanm10/myPortfolio.git" className="project-link" target="_blank" rel="noopener noreferrer">View Project</a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="section">
        <h2><FaPhoneAlt />Contact Me</h2>
        {/* <p>I'm always excited to discuss new projects, collaborations, or innovative ideas. Let's connect!
        <br />
        <br />
        </p> */}
        <div className="contact-container">
          <div className="contact-links">
            <a href="mailto:hannanmushtaq867@gmail.com" target="_blank" rel="noopener noreferrer"><FaEnvelope />hannanmushtaq867@gmail.com</a>
            <a href="http://www.linkedin.com/in/hannan-mushtaq-8341222a4" target="_blank" rel="noopener noreferrer"><FaLinkedin /> LinkedIn</a>
            <a href="https://github.com/Hannanm10" target="_blank" rel="noopener noreferrer"><FaGithub /> GitHub</a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <p>&copy; {new Date().getFullYear()} Hannan Mushtaq. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;