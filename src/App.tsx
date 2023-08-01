import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./Home/Home";
import NotFound from "./NotFound/NotFound";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
