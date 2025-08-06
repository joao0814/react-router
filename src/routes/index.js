import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import DefaultPage from "components/DefaultPage";
import Post from "pages/Post";
import Undefined from "pages/Undefined";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<DefaultPage />}>
        <Route path="" element={<Home />} />
        <Route path="about" element={<About />} />
      </Route>
      <Route path="posts/:id" element={<Post />} />
      <Route path="*" element={<Undefined />} />
    </Routes>
  );
}
