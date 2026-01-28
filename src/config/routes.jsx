import { lazy } from "react";
import { Routes, Route } from "react-router-dom";
const Home = lazy(() => import("../pages/Home/Home"));
const NotFound = lazy(() => import("../pages/NotFound"));

const AppRouter = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/home" element={<Home />} />
    <Route path="*" element={<NotFound />} />
  </Routes>
);

export default AppRouter;
