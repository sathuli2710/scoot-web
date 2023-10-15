import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Locations from "./pages/Locations";
import Careers from "./pages/Careers";
import Layout from "./components/Layout";

const App: React.FC = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/locations" element={<Locations />} />
        <Route path="/careers" element={<Careers />} />
      </Routes>
    </Layout>
  );
};

export default App;
