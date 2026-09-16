import { Link } from "react-router-dom";
import Nav from "../components/Nav";
import { resume, resumePdf, site } from "../data/site";

export default function Resume() {
  return (
    <>
      <Nav variant="resume" />
      <div className="resume-shell">
        <div className="resume-top">
          <div>
            <h1>{site.name}</h1>
            <p>{resume.subtitle}</p>
          </div>
          <div className="resume-actions">
            <a className="btn btn-gold" href={resumePdf} download>
              PDF
            </a>
            <Link className="btn btn-ghost" to="/" style={{ borderColor: "#d4a84b", color: "#15170f" }}>
              Portfolio
            </Link>
          </div>
        </div>

        <h2>Summary</h2>
        <p>{resume.summary}</p>

        <h2>Education</h2>
        <p>
          <strong>{resume.educationTitle}</strong> — {resume.educationMeta}
        </p>
        <p>{resume.coursework}</p>

        <h2>Experience</h2>
        {resume.experience.map((job) => (
          <div key={job.title}>
            <p>
              <strong>{job.title}</strong> — {job.meta}
            </p>
            <ul>
              {job.bullets.map((bullet) => (
                <li key={bullet}>{bullet}</li>
              ))}
            </ul>
          </div>
        ))}

        <h2>Volunteer</h2>
        {resume.volunteer.map((job) => (
          <div key={job.title}>
            <p>
              <strong>{job.title}</strong> — {job.meta}
            </p>
            <ul>
              {job.bullets.map((bullet) => (
                <li key={bullet}>{bullet}</li>
              ))}
            </ul>
          </div>
        ))}

        <h2>Projects</h2>
        {resume.projects.map((project) => (
          <p key={project.title}>
            <strong>{project.title}</strong> — {project.detail}
          </p>
        ))}

        <h2>Skills</h2>
        {resume.skills.map((group) => (
          <p key={group.label}>
            <strong>{group.label}:</strong> {group.value}
          </p>
        ))}
      </div>
    </>
  );
}
