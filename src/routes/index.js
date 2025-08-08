import { Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
import DefaultPage from "components/DefaultPage";

// Lazy load components for better performance
const Home = lazy(() => import("../pages/Home"));
const About = lazy(() => import("../pages/About"));
const Post = lazy(() => import("../pages/Post"));
const Undefined = lazy(() => import("../pages/Undefined"));

// Loading component
const LoadingSpinner = () => (
  <div style={{ 
    display: 'flex', 
    justifyContent: 'center', 
    alignItems: 'center', 
    height: '200px' 
  }}>
    Loading...
  </div>
);

export default function AppRoutes() {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <Routes>
        <Route path="/" element={<DefaultPage />}>
          <Route path="" element={<Home />} />
          <Route path="about" element={<About />} />
        </Route>
        <Route path="posts/:id" element={<Post />} />
        <Route path="*" element={<Undefined />} />
      </Routes>
    </Suspense>
  );
}
