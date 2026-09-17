import { Link } from "react-router-dom";
import Experience from "../components/Experience";
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import { ProjectCard } from "../components/ProjectCard";
import {
  about,
  contacts,
  education,
  featuredProjects,
  moreProjects,
  orgs,
  photo,
  resumePdf,
  site,
  skillSections,
} from "../data/site";

export default function Home() {
  return (
    <>
      <a className="skip" href="#work">
        Skip to work
      </a>
      <Nav />
      <main id="top">
        <section className="hero">
          <div className="wrap hero-grid">
            <div className="reveal">
              <p className="kicker">{site.kicker}</p>
              <h1 className="name">
                {site.firstName} <em>{site.lastName}</em>
              </h1>
              <p className="lede">{site.lede}</p>
              <div className="hero-actions">
                <a className="btn btn-gold" href="#work">
                  See selected work
                </a>
                <a className="btn btn-ghost" href={resumePdf} download>
                  Download resume
                </a>
              </div>
              <div className="meta-row">
                <span>
                  <i className="dot" />
                  {site.availability}
                </span>
                <span>{site.educationLine}</span>
              </div>
            </div>
            <div className="portrait reveal">
              <div className="portrait-frame" />
              <img src={photo} alt={site.photoAlt} />
              <div className="portrait-badge">
                <span>{site.photoBadgeLabel}</span>
                {site.photoBadge}
              </div>
            </div>
          </div>
        </section>

        <div className="logo-band">
          <div className="wrap">
            <p className="eyebrow">Places I have built, studied, and served</p>
            <div className="logo-grid">
              {orgs.map((org) => {
                const inner = (
                  <>
                    <div className="logo-frame">
                      <img src={org.logo} alt={org.alt} />
                    </div>
                    <p>
                      <strong>{org.name}</strong>
                      <span>{org.detail}</span>
                    </p>
                  </>
                );

                if (org.href) {
                  return (
                    <a
                      key={org.name}
                      className="logo-card"
                      href={org.href}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {inner}
                    </a>
                  );
                }

                return (
                  <article key={org.name} className="logo-card">
                    {inner}
                  </article>
                );
              })}
            </div>
          </div>
        </div>

        <hr className="rule wrap" />

        <section id="about">
          <div className="wrap about-grid">
            <div>
              <p className="eyebrow">{about.eyebrow}</p>
              <h2>{about.heading}</h2>
              <div className="about-copy">
                {about.paragraphs.map((paragraph) => (
                  <p key={paragraph.slice(0, 24)}>{paragraph}</p>
                ))}
              </div>
            </div>
            <div className="stats">
              {about.stats.map((stat) => (
                <div className="stat" key={stat.label}>
                  <b>{stat.value}</b>
                  <span>{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="work">
          <div className="wrap">
            <div className="section-head">
              <div>
                <p className="eyebrow">Selected work</p>
                <h2>Products, platforms, and systems.</h2>
              </div>
              <p className="lede">A mix of client delivery, community software, and academic systems work.</p>
            </div>

            <div className="work-grid">
              {[...featuredProjects, ...moreProjects].map((project) => (
                <ProjectCard key={project.title} project={project} />
              ))}
            </div>
          </div>
        </section>

        <Experience />

        <section id="skills">
          <div className="wrap">
            {skillSections.map((band) => (
              <div className="skill-band" key={band.eyebrow}>
                <div className="section-head">
                  <div>
                    <p className="eyebrow">{band.eyebrow}</p>
                    <h2>{band.heading}</h2>
                  </div>
                  <p className="lede">{band.lede}</p>
                </div>
                <div className="skill-groups">
                  {band.groups.map((group) => (
                    <div className="skill-group" key={group.title}>
                      <h3>{group.title}</h3>
                      <ul>
                        {group.items.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="education">
          <div className="wrap">
            <div className="resume-strip">
              <div>
                <p className="eyebrow">Education &amp; resume</p>
                <h2>{education.heading}</h2>
                <p className="lede">{education.copy}</p>
              </div>
              <div className="hero-actions">
                <Link className="btn btn-gold" to="/resume">
                  View resume
                </Link>
                <a className="btn btn-ghost" href={resumePdf} download>
                  PDF
                </a>
              </div>
            </div>
          </div>
        </section>

        <section id="contact">
          <div className="wrap">
            <div className="section-head">
              <div>
                <p className="eyebrow">Contact</p>
                <h2>Let’s build something solid.</h2>
              </div>
            </div>
            <div className="contact-grid">
              {contacts.map((item) => (
                <article className="contact-card" key={item.label}>
                  <span>{item.label}</span>
                  <a
                    href={item.href}
                    target={item.external ? "_blank" : undefined}
                    rel={item.external ? "noreferrer" : undefined}
                  >
                    {item.value}
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
