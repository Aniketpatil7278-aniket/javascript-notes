import { BrowserRouter, Route, Routes } from "react-router-dom"
import Callbackfun from "./pages/Callbackfun";
import PromiseoPage from "./pages/PromiseoPage";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Callbackfun />} />
        <Route path="/promiseopage" element={<PromiseoPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App
