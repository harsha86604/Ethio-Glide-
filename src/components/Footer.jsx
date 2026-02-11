import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="w-full py-10 border-t border-white/10 bg-background/50 backdrop-blur-lg mt-auto">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex flex-col gap-2 text-center md:text-left">
          <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-400">EthioGlide</span>
          <p className="text-sm text-muted-foreground max-w-xs">
            Building critical thinkers who shape the world.
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-8 text-sm font-medium text-muted-foreground">
          <Link to="/" className="hover:text-primary transition-colors">Home</Link>
          <Link to="/services" className="hover:text-primary transition-colors">Services</Link>
          <Link to="/resources" className="hover:text-primary transition-colors">Resources</Link>
          <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
        </div>

        <div className="text-xs text-muted-foreground text-center md:text-right">
          &copy; {new Date().getFullYear()} EthioGlide Consulting.<br/>All rights reserved.
        </div>
      </div>
    </footer>
  );
};
