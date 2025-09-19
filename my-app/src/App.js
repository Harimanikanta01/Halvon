import './App.css';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Sliding from './sliding';
import Icons from './icons';
import Watches from './watches';
import Best from './best';
import She from './sherules';
import Footer from './footer';

function App() {
  const [input, setInput] = useState({ name: "" });
  const token = localStorage.getItem("token");

  const handleLogout = () => {
    localStorage.removeItem("token");
    alert("Logged out successfully");
    window.location.reload();
  };

  const handleInput = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    AOS.init({ duration: 1000, once: false });
  }, []);

  return (
    <>
      <header className="navbar-container" data-aos="fade-down">
        <div className="navbar-logo">
          <h2>Hilvon</h2>
        </div>
        <div className="navbar-search">
          <input
            type="search"
            name="name"
            value={input.name}
            onChange={handleInput}
            placeholder="Search"
            className="search-input"
          />
        </div>
        <nav className="navbar-links">
          <Link to="#">Categories</Link>
          <Link to="#">Brands</Link>
          <Link to="/chatbot">help</Link>

          <Link to="/cart">Cart</Link>
          {!token && <Link to="/login">Login</Link>}
          {!token && <Link to="/sighnup">Signup</Link>}
          {token && <Link to="/profile">Profile</Link>}
          {token && <button className="btn-logout" onClick={handleLogout}>Logout</button>}
        </nav>
      </header>

      <main>
        <div data-aos="fade-up"><Sliding /></div>
        <div data-aos="fade-in"><Icons /></div>
        <Watches />
        <Best />
        <She />
        <Footer />
      </main>
    </>
  );
}

export default App;
