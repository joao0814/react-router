import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="*" element={<div>Page not found</div>} />
    </Routes>
  );
}
