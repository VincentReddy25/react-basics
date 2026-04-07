import { Link, Route, Routes } from "react-router-dom";

import Home from './Home'
import About from "./About";
import Contact from "./Contact";
import Login from "./Login";

export default function Navbar() {
    return (
        <>
            <Link to="/home">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/login">Login</Link>

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/login" element={<Login />} />
            </Routes>
        </>
    )
}

