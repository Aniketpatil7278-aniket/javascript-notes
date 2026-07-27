import { BrowserRouter, Route, Routes } from "react-router-dom"
import Callbackfun from "./pages/Callbackfun";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Callbackfun />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App
