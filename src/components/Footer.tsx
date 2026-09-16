import { site } from "../data/site";

export default function Footer() {
  return (
    <footer>
      <div className="wrap foot">
        <span>
          © {new Date().getFullYear()} {site.name}
        </span>
        <span>{site.footerNote}</span>
      </div>
    </footer>
  );
}
