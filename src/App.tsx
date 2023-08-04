import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import NavBar from "./NavBar/NavBar";
import Footer from "./Footer/Footer";

import Home from "./Home/Home";
import NotFound from "./NotFound/NotFound";

function App() {
  return (
    <Router>
      <div className="App" id="App">
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
