import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="border-t border-border bg-card/40 py-12 px-6 md:px-12">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
      <Link to="/" className="text-xl font-display font-bold text-gradient-primary">
        Hispurpose Arts
      </Link>
      <p className="text-muted-foreground text-sm">
        © {new Date().getFullYear()} Hispurpose Arts. All rights reserved.
      </p>
      <p className="text-muted-foreground text-sm"><a href="https://dev-samtech-6q6h.vercel.app" target="_blank">Website Developed By SamTech</a></p>
      <div className="flex gap-4">
        {["Home", "About", "Services", "Portfolio", "Contact"].map((item) => (
          <Link
            key={item}
            to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
            className="text-xs text-muted-foreground hover:text-primary transition-colors"
          >
            {item}
          </Link>
        ))}
      </div>
    </div>
  </footer>
);

export default Footer;
