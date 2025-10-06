import { useState, useEffect } from "react";
import resume from "./resumeData";

export default function App() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(2);
  const projects = resume.projects;
  const isMobile = window.innerWidth <= 768;

  useEffect(() => {
    const handleResize = () => {
      setItemsPerPage(window.innerWidth <= 768 ? 1 : 2);
    };
    handleResize(); // run once on mount
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Navigate carousel backward
  const handlePrev = () => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  };

  // Navigate carousel forward
  const handleNext = () => {
    setCurrentIndex((prev) =>
      Math.min(prev + 1, projects.length - itemsPerPage)
    );
  };

  return (
    <div className="page">
      {/*---------------------------------------------
        Hero Section
      ---------------------------------------------*/}
      <header className="hero">
        <h1>{resume.name}</h1>
        <p>{resume.role}</p>
        <p>
          {resume.email} | {resume.phone}
        </p>
        <p>
          <a href={resume.github} target="_blank" rel="noreferrer">
            GitHub
          </a>{" "}
          ·{" "}
          <a href={resume.linkedin} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
        </p>
      </header>

      {/* Summary */}
<section className="section">
  <h2 className="section__title">Summary</h2>
  <p>{resume.summary}</p>
</section>

{/* Skills */}
<section className="section">
  <h2 className="section__title">Skills</h2>
  <ul className="skills-list">
    {resume.skills.map(skill => (
      <li key={skill}>{skill}</li>
    ))}
  </ul>
</section>

      {/*---------------------------------------------
        Projects Section (Carousel)
      ---------------------------------------------*/}
      <section>
        <h2
          style={{
            textAlign: "center",
            fontSize: "2rem",
            fontWeight: "700",
            marginBottom: "1rem",
            color: "var(--accent)",
          }}
        >
          Projects
        </h2>

        <div className="carousel-wrapper">
          <div
            className="carousel-track"
            style={{
              transform: `translateX(-${currentIndex * (100 / itemsPerPage)}%)`,
            }}
          >
            {projects.map((p) => (
              <div key={p.name} className="project-card card">
                {p.image && (
                  <img src={p.image} alt={p.name} className="project-image" />
                )}
                <h3 style={{ color: "var(--accent-2)" }}>{p.name}</h3>
                <p>{p.description}</p>
                {p.link && (
                  <a
                    href={p.link}
                    target="_blank"
                    rel="noreferrer"
                    className="link"
                  >
                    View Project
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="carousel-controls">
          <button
            className="btn"
            onClick={handlePrev}
            disabled={currentIndex === 0}
          >
            &lt; Prev
          </button>
          <button
            className="btn"
            onClick={handleNext}
            disabled={currentIndex + itemsPerPage >= projects.length}
          >
            Next &gt;
          </button>
        </div>
      </section>

      {/* Education */}
<section className="section">
  <h2 className="section__title">Education</h2>
  

  {resume.education.map(ed => (
    <div key={ed.institution} className="item">
      <div className="item__header">
        <h3>{ed.studyType}</h3>
        <span className="dates">{ed.start} – {ed.end}</span>
      </div>
      <p className="institution">{ed.institution}</p>

      {ed.gpa && (
        <p className="education-detail"><strong>GPA:</strong> {ed.gpa}</p>
      )}

      {ed.coursework && (
        <p className="education-detail">
          <strong>Relevant Coursework:</strong> {ed.coursework.join(", ")}
        </p>
      )}

      {ed.honors && (
        <p className="education-detail">
          <strong>Honors:</strong> {ed.honors}
        </p>
      )}
    </div>
  ))}
</section>

      {/* Experience */}
<section className="section">
  <h2 className="section__title">Experience</h2>
  {resume.experience.map(e => (
    <div key={e.company} className="item">
      <div className="item__header">
        <h3>{e.title} – {e.company}</h3>
        <span className="dates">{e.start} – {e.end}</span>
      </div>
      <ul className="bullets">
        {e.highlights.map((h, i) => <li key={i}>{h}</li>)}
      </ul>
    </div>
  ))}
</section>

<footer className="footer">
  <p>
    © {new Date().getFullYear()} {resume.name}. All rights reserved.
  </p>
</footer>
    </div>
  );
}
