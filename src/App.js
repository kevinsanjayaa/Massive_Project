import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes, useLocation } from 'react-router-dom';
import Home from './Navigation/homeScreen';
import Praktikal from './Navigation/praktikalScreen';
import iconWeb from './assets/images/iconWeb.png';
import { Button } from 'react-bootstrap';

function App() {
  return (
    <Router>
      <div style={container}>
        <nav style={navStyle}>
          <div style={leftSideStyle}>
            <Link to="/">
              <img src={iconWeb} alt="Logo" style={logoStyle} />
            </Link>
          </div>
          <div style={rightSideStyle}>
            <NavLink to="/" style={linkStyle}>
              Beranda
            </NavLink>
            <NavLink to="/praktikal" style={linkStyle}>
              Praktikal
            </NavLink>
            <NavLink to="/tips" style={linkStyle}>
              Price
            </NavLink>
            <Button type="button" className='btn btn-primary btn-md'>
              Login
            </Button>
          </div>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/praktikal" element={<Praktikal />} />
        </Routes>
      </div>
    </Router>
  );
}

const container = {
  padding: '0 2rem'
};

const navStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '1rem',
  background: 'rgba(255, 255, 255, 0.5)', 
  color: '#fff',
};

const leftSideStyle = {
  flex: '1',
};

const rightSideStyle = {
  display: 'flex',
  alignItems: 'center',
};

const logoStyle = {
  fontSize: '1.5rem',
};

const iconStyle = {
  fontSize: '1.2rem',
  margin: '0 0.5rem',
};

const linkStyle = {
  marginRight: '1rem',
  textDecoration: 'none',
  color: 'black', // default color
};

// aktif page
function NavLink({ to, style, children }) {
  const location = useLocation();

  return (
    <Link to={to} style={to === location.pathname ? { ...style, color: '#3E8CFF', textDecoration: 'underline' } : style}>
      {children}
    </Link>
  );
}

export default App;