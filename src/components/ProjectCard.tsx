import type { CSSProperties } from "react";
import type { Bullet, Project } from "../data/site";

export function Tags({ tags }: { tags: string[] }) {
  return (
    <div className="tags">
      {tags.map((tag) => (
        <span className="tag" key={tag}>
          {tag}
        </span>
      ))}
    </div>
  );
}

export function ProjectCard({
  project,
  style,
}: {
  project: Project;
  style?: CSSProperties;
}) {
  return (
    <article className="card" style={style}>
      <Tags tags={project.tags} />
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      {project.href ? (
        <a className="card-link" href={project.href} target="_blank" rel="noreferrer">
          {project.linkLabel}
        </a>
      ) : project.linkLabel ? (
        <span className="card-link">{project.linkLabel}</span>
      ) : null}
    </article>
  );
}

export function BulletList({ items }: { items: Bullet[] }) {
  return (
    <ul>
      {items.map((item) => (
        <li key={typeof item === "string" ? item : `${item.label}${item.after ?? ""}`}>
          {typeof item === "string" ? (
            item
          ) : (
            <>
              {item.before}
              <a href={item.href} target="_blank" rel="noreferrer">
                {item.label}
              </a>
              {item.after}
            </>
          )}
        </li>
      ))}
    </ul>
  );
}
