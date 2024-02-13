import { useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Movies from "./pages/movies";
import Series from "./pages/series";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div style={{width: '100%', height: '100vh'}}>
      <BrowserRouter>
        <Routes>
          <Route index element={<Movies />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/series" element={<Series />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
