import "./App.css";
import Styled from "styled-components";
import Home from "./pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./pages/About";

const AppEl = Styled.div`

`;

function App() {
   return (
      <AppEl>
         <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
         </Routes>
      </AppEl>
   );
}

export default App;
