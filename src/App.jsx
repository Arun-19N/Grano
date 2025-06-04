import React from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import AOS from "aos";
import "aos/dist/aos.css";
import '../src/assets/cssfiles/all.min.css';

import { BrowserRouter } from "react-router-dom";

import Nav from './components/Nav/Nav';
import Footer from './components/Footer/Footer';

function App() {
React.useEffect(() => {
AOS.init({ duration: 1000 });
}, []);

return (
<BrowserRouter basename="/Grano">
<>
<Nav />
{/* If you have Routes, include them here */}
<Footer />
</>
</BrowserRouter>
);
}

export default App;