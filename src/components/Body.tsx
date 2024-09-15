import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { MemoryRouter, Routes, Route } from "react-router-dom";
import Resume from "./Resume";
import CoverLetter from "./CoverLetter";
import Settings from "./Settings";

const Body = () => {
  return (
    <Routes>
      <Route path="/" element={<Resume />} />
      <Route path="/cover-letter" element={<CoverLetter />} />
      <Route path="/settings" element={<Settings />} />
    </Routes>
  );
};

export default Body;
