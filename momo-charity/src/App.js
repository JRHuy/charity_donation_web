import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Program from "./details/Program";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/details/program" element={<Program />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
