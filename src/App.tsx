// import React from "react";
import { BrowserRouter as Router, Route, Routes }  from "react-router-dom";
// import Collections from "./pages/Collections.tsx";
import Home from "./pages/Home.tsx";

// import Contact from "./pages/Contact.tsx";
import NotFound from "./pages/NotFound.tsx";
import Header from "./components/common/Header.tsx";
import Footer from "./components/common/Footer.tsx";
import "./App.css"

function App() {
    return (
        <>
            <Router>
                <Header />
                <Routes>
                    <Route  path='/' element={<Home />} />
                    {/*<Route  path='/collections' element={<Collections />} />*/}
                    {/*<Route  path='/about' element={<About />} />*/}
                    {/*<Route  path='/contact' element={<Contact />} />*/}
                    <Route path="*" element={<NotFound />} />
                </Routes>
                <Footer />
            </Router>
        </>
    );
}

export default App
