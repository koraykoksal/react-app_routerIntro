import Footer from "./components/Footer";
import Nav from "./components/Nav";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Instructors from "./pages/Instructors";
import NotFound from "./pages/NotFound";
import  { BrowserRouter,Route, Routes } from "react-router-dom";
import { InstructorsDetail } from "./pages/instructorsDetail";
import About from "./components/About";
import Courses from "./components/Courses";

function App() {
  return (
    
    <BrowserRouter>
          <Nav />
          <Routes>
            <Route path="/" element={<Home />}>
            <Route path="/" element={<About />}/>
            <Route path="/" element={<Courses />}/>
            </Route>
            <Route path="/instructors" element={<Instructors />}/>
            <Route path="/instructors/:id" element={<InstructorsDetail />}/>
            <Route path="/contact" element={<Contact />}/>
            {/* olmayan bir adres girildiğinde çalışacak rotue */}
            <Route path="*" element={<NotFound />}/>
          </Routes>
        <Footer />


    </BrowserRouter>

    
  );
}

export default App;
