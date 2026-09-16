import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { favicon, nav, resumePdf, site } from "../data/site";

type Props = {
  variant?: "dark" | "resume";
};

export default function Nav({ variant = "dark" }: Props) {
  const [open, setOpen] = useState(false);
  const [activeHash, setActiveHash] = useState("work");
  const location = useLocation();
  const isResume = variant === "resume";

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (isResume) return;

    const spy = () => {
      const sections = [...document.querySelectorAll<HTMLElement>("section[id]")];
      const y = window.scrollY + 96;
      let current = sections[0]?.id ?? "work";
      for (const section of sections) {
        if (section.offsetTop <= y) current = section.id;
      }
      setActiveHash(current);
    };

    spy();
    window.addEventListener("scroll", spy, { passive: true });
    return () => window.removeEventListener("scroll", spy);
  }, [isResume]);

  return (
    <header
      className="nav"
      style={
        isResume
          ? {
              background: "rgba(236, 230, 214, 0.9)",
              borderBottomColor: "rgba(26, 28, 23, 0.12)",
            }
          : undefined
      }
    >
      <div className="wrap nav-inner">
        <Link className="brand" to="/" style={isResume ? { color: "#15170f" } : undefined}>
          <img src={favicon} alt="" />
          <span>{site.name}</span>
        </Link>
        {!isResume && (
          <button
            className="menu-btn"
            type="button"
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((value) => !value)}
          >
            ☰
          </button>
        )}
        <nav
          className={`nav-links${open ? " open" : ""}${isResume ? " always" : ""}`}
          aria-label="Primary"
        >
          {isResume ? (
            <>
              <Link to="/" style={{ color: "#3d3a32" }}>
                Home
              </Link>
              <a href={resumePdf} download style={{ color: "#3d3a32" }}>
                Download PDF
              </a>
            </>
          ) : (
            nav.map((item) =>
              "to" in item ? (
                <NavLink key={item.label} to={item.to} onClick={() => setOpen(false)}>
                  {item.label}
                </NavLink>
              ) : (
                <Link
                  key={item.label}
                  to={{ pathname: "/", hash: `#${item.hash}` }}
                  className={activeHash === item.hash ? "active" : undefined}
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              ),
            )
          )}
        </nav>
      </div>
    </header>
  );
}
