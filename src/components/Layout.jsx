import { StarBackground } from "./StarBackground";
import { ThemeToggle } from "./ThemeToggle";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";

export const Layout = ({ children }) => {
  return (
    <div className="relative min-h-screen w-full bg-background text-foreground overflow-x-hidden flex flex-col">
      <StarBackground />
      <Navbar />
      <ThemeToggle />
      <main className="container mx-auto px-4 py-8 relative z-10 pt-24 flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
};
