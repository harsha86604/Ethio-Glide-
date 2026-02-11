import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { name: "Home", path: "/" },
  { name: "Services", path: "/services" },
  { name: "How It Works", path: "/how-it-works" },
  { name: "Resources", path: "/resources" },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-transparent",
      isScrolled ? "bg-background/80 backdrop-blur-md border-border py-4" : "bg-transparent py-6"
    )}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-400">
          EthioGlide
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-8 items-center">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary relative group",
                location.pathname === item.path ? "text-primary" : "text-muted-foreground"
              )}
            >
              {item.name}
              <span className={cn(
                "absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full",
                location.pathname === item.path ? "w-full" : ""
              )}/>
            </Link>
          ))}
          <a
            href="https://calendar.app.google/9vhRNejDwpZvQ32c6"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2 rounded-full bg-primary text-white font-medium hover:shadow-[0_0_15px_rgba(139,92,246,0.5)] transition-all transform hover:scale-105 active:scale-95"
          >
            Book Consultation
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden p-2 text-foreground focus:outline-none"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-background/95 backdrop-blur-xl border-b border-border p-6 flex flex-col gap-4 shadow-2xl animate-in slide-in-from-top-5">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              onClick={() => setIsMenuOpen(false)}
              className={cn(
                "text-lg font-medium p-3 rounded-lg hover:bg-muted/50 transition-colors",
                location.pathname === item.path ? "text-primary bg-primary/5" : "text-foreground"
              )}
            >
              {item.name}
            </Link>
          ))}
          <a
            href="https://calendar.app.google/9vhRNejDwpZvQ32c6"
            target="_blank"
            rel="noopener noreferrer"
            className="text-center w-full py-3 rounded-lg bg-primary text-white font-bold text-lg mt-2"
          >
            Book Consultation
          </a>
        </div>
      )}
    </nav>
  );
};
