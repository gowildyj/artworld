import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Home from "@pages/Home";
import About from "@pages/About";
import Gallery from "@pages/Gallery";
import GalleryDetailPage from "@pages/GalleryDetailPage";
import GalleryModal from "@pages/GalleryModal";
import Exhibitions from "@pages/Exhibitions";
import News from "@pages/News";
import Contact from "@pages/Contact";
import Shop from "@pages/Shop";
import Admin from "@pages/Admin";
import NotFound from "@pages/NotFound";

export default function AppRoutes() {
  const location = useLocation();
  const backgroundLocation = location.state?.backgroundLocation;

  return (
    <>
      <Routes>
        <Route path="/" element={<Gallery />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/gallery" element={<Gallery />}></Route>
        <Route path="/gallery/artwork/:id" element={<GalleryDetailPage />} />
        <Route path="/exhibitions" element={<Exhibitions />}></Route>
        <Route path="/news" element={<News />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/shop" element={<Shop />}></Route>
        <Route path="/admin" element={<Admin />}></Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}
