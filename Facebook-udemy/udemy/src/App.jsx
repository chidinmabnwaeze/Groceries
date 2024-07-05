import "./App.css";
import Facebook from "./components/facebook";
import Login from "./components/login";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Facebook />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
