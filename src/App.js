import "./App.css";
import Styled from "styled-components";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import About from "./pages/About";
import ScrollToTop from "./components/Static/ScrollToTop";
import Services from "./pages/Services";
import Portfolio from "./pages/Portfolio";

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
            <Route path="/portfolio" element={<Portfolio />} />
         </Routes>
      </AppEl>
   );
}

export default App;
