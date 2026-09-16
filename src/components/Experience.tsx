import { useEffect, useId, useRef, useState } from "react";
import { BulletList, Tags } from "./ProjectCard";
import type { Role } from "../data/site";
import { volunteerRoles, workRoles } from "../data/site";

function RoleCard({ role, onOpen }: { role: Role; onOpen: (role: Role) => void }) {
  return (
    <button
      type="button"
      className="job job-button"
      onClick={() => onOpen(role)}
      aria-haspopup="dialog"
    >
      <div className="logo-frame job-logo">
        <img src={role.logo} alt="" />
      </div>
      <div>
        <h3>{role.title}</h3>
        <div className="org">{role.org}</div>
        <ul>
          {role.highlights.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <span className="job-more">View full experience</span>
      </div>
      <div className="when">{role.when}</div>
    </button>
  );
}

function RoleDialog({ role, onClose }: { role: Role; onClose: () => void }) {
  const titleId = useId();
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    closeRef.current?.focus();
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener("keydown", onKey);
    };
  }, [onClose]);

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div
        className="modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        onClick={(event) => event.stopPropagation()}
      >
        <div className="modal-top">
          <div className="logo-frame job-logo">
            <img src={role.logo} alt="" />
          </div>
          <div>
            <p className="eyebrow">{role.kind === "work" ? "Work" : "Volunteer"}</p>
            <h3 id={titleId}>{role.title}</h3>
            <div className="org">{role.org}</div>
            <div className="when">{role.when}</div>
          </div>
        </div>

        <p className="eyebrow">Experience</p>
        <BulletList items={role.bullets} />

        <p className="eyebrow">Skills gained</p>
        <Tags tags={role.skills} />

        <button ref={closeRef} className="btn btn-gold modal-close" type="button" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
}

export default function Experience() {
  const [openRole, setOpenRole] = useState<Role | null>(null);

  return (
    <section id="experience">
      <div className="wrap">
        <div className="section-head">
          <div>
            <p className="eyebrow">Experience</p>
            <h2>Work and volunteer.</h2>
          </div>
        </div>
        <p className="eyebrow timeline-label">Work</p>
        <div className="timeline">
          {workRoles.map((job) => (
            <RoleCard key={`${job.title}-${job.when}`} role={job} onOpen={setOpenRole} />
          ))}
        </div>
        <p className="eyebrow timeline-label">Volunteer</p>
        <div className="timeline">
          {volunteerRoles.map((job) => (
            <RoleCard key={`${job.title}-${job.when}`} role={job} onOpen={setOpenRole} />
          ))}
        </div>
      </div>
      {openRole ? <RoleDialog role={openRole} onClose={() => setOpenRole(null)} /> : null}
    </section>
  );
}
