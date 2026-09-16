import { useEffect } from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import StaticField from "./components/StaticField";
import { site } from "./data/site";
import Home from "./pages/Home";
import Resume from "./pages/Resume";

function basename() {
  const base = import.meta.env.BASE_URL.replace(/\/$/, "");
  return base === "" ? "/" : base;
}

function ScrollAndTheme() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    const onResume = pathname.endsWith("/resume");
    document.body.classList.toggle("resume-page", onResume);
    document.title = onResume
      ? `Resume — ${site.name}`
      : `${site.name} — ${site.title}`;
    if (hash) {
      const id = hash.replace("#", "");
      requestAnimationFrame(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      });
      return;
    }
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [pathname, hash]);

  return null;
}

export default function App() {
  return (
    <BrowserRouter basename={basename()}>
      <ScrollAndTheme />
      <StaticField />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/resume" element={<Resume />} />
      </Routes>
    </BrowserRouter>
  );
}
