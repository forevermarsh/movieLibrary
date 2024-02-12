import { BrowserRouter, Routes, Route, Router } from "react-router-dom";
import Movies from "./pages/movies";
import Series from "./pages/series";
import Search from "./pages/search";
import Cart from "./pages/cart";
import Preview from "./pages/preview";
import Signup from "./pages/signup";

function App() {


  return (
    <div style={{width: '100%'}}>
      <BrowserRouter>
        <Routes>
          <Route index element={<Movies />} />
          <Route path="/movies" element={<Movies />}/>
          <Route path="/series" element={<Series />} />
          <Route path="/search" element={<Search />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/preview" element={<Preview />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
