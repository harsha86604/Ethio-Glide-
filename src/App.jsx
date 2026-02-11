import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "@/components/ui/toaster";
import { Layout } from "@/components/Layout";

// Import Pages
import Home from "./pages/Home";
import Services from "./pages/Services";
import HowItWorks from "./pages/HowItWorks";
import Resources from "./pages/Resources";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/how-it-works" element={<HowItWorks />} />
          <Route path="/resources" element={<Resources />} />
        </Routes>
      </Layout>
      <Toaster />
    </BrowserRouter>
  );
}

export default App;
