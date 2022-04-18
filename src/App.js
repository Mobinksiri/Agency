import "./App.css";
import Styled from "styled-components";
import Home from "./pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./pages/About";
import ScrollToTop from "./components/Static/ScrollToTop";
import Services from "./pages/Services";

const AppEl = Styled.div`

`;

function App() {
   return (
      <AppEl>
         <ScrollToTop />
         <Routes>
            <Route path="/" index element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
         </Routes>
      </AppEl>
   );
}

export default App;
