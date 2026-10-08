export default function Home() {
  return (
    <main>
      <nav className="navbar">
        <h2>My Portfolio</h2>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#certificates">Certificates</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <section id="home" className="hero">
        <div>
          <p className="hello">Hello, I'm</p>
          <h1>Akshaya</h1>
          <h2>Engineering Student</h2>

          <p>
            Welcome to my portfolio. I am interested in technology,
            programming and building creative projects.
          </p>

          <a href="#projects" className="button">
            View My Projects
          </a>
        </div>
      </section>

      <section id="about" className="section">
        <h2>About Me</h2>
        <p>
          I am an engineering student passionate about learning new
          technologies and developing useful projects.
        </p>
      </section>

      <section id="projects" className="section">
        <h2>My Projects</h2>

        <div className="cards">
          <div className="card">
            <h3>College Enquiry Chatbot</h3>
            <p>
              An AI-powered chatbot designed to answer common college
              enquiries.
            </p>
          </div>

          <div className="card">
            <h3>Project 2</h3>
            <p>Add your second project description here.</p>
          </div>
        </div>
      </section>

      <section id="certificates" className="section">
        <h2>Certificates</h2>
        <p>My courses and certifications will be displayed here.</p>
      </section>

      <section id="contact" className="section contact">
        <h2>Contact Me</h2>
        <p>Email: your-email@example.com</p>
        <p>LinkedIn: Add your LinkedIn profile</p>
        <p>GitHub: Add your GitHub profile</p>
      </section>

      <footer>
        <p>© 2026 Akshaya. All rights reserved.</p>
      </footer>
    </main>
  );
}