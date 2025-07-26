import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "@pages/Home";
import About from "@pages/About";
import Gallery from "@pages/Gallery";
import Exhibitions from "@pages/Exhibitions";
import News from "@pages/News";
import Contact from "@pages/Contact";
import Shop from "@pages/Shop";
import Admin from "@pages/Admin";
import NotFound from "@pages/NotFound";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/about" element={<About />}></Route>
      <Route path="/gallery" element={<Gallery />}></Route>
      <Route path="/exhibitions" element={<Exhibitions />}></Route>
      <Route path="/news" element={<News />}></Route>
      <Route path="/contact" element={<Contact />}></Route>
      <Route path="/shop" element={<Shop />}></Route>
      <Route path="/admin" element={<Admin />}></Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
