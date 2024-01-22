import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Home } from "./pages/Home";
import { FAQPage } from "./pages/FAQPage";
import { ContactPage } from "./pages/ContactPage";
import { ResourcePage } from "./pages/ResourcePage";
import { EMDRIPage } from "./pages/EMDRIPage";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/faqpage" element={<FAQPage />} />
          <Route path="/contactpage" element={<ContactPage />} />
          <Route path="/resourcepage" element={<ResourcePage />} />
          <Route path="/emdripage" element={<EMDRIPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
