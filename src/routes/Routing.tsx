import { Routes, Route } from "react-router-dom";
import NotFound from "../components/NotFound";
import Home from "../components/Home";

const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default Routing;
