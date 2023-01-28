import "./App.css";
import Header from "./layouts/header";
import Footer from "./layouts/footer";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Detailpage from "./pages/detailpage";
import AddFlower from "./pages/addFlower";
import NoteFound from "./pages/notefound";

function App() {

  return (
    <div className="App">
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="detail-page/:id" element={<Detailpage />} />
        <Route path="/addFlower" element={<AddFlower />} />
        <Route path="*" element={<NoteFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
