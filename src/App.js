import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom';
import Home from './pages/Home';
import Background from './background.jpg';

class App extends Component {
  render() {
    return (
      //di sini background gambar
      <div>
        <Router>
          <div style={{ backgroundImage: `url(${Background})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
          <nav className="navbar navbar-expand-lg navbar-light">
              <div className="container">
                <a className="navbar-brand fw-bold fs-3 text-primary letter-spacing-brand" href="#">ANOA TECH</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                    <li className="nav-item padding-list">
                      <Link className="nav-link" aria-current="page" to="/">Home</Link>
                    </li>
                    <li className="nav-item padding-list">
                      <Link className="nav-link" aria-current="page" to="/about">About</Link>
                    </li>
                    <li className="nav-item padding-list">
                      <Link className="nav-link" aria-current="page" to="/service">Service</Link>
                    </li>
                    <li className="nav-item padding-list">
                      <Link className="nav-link" aria-current="page" to="/blog">Blog</Link>
                    </li>
                    <li className="nav-item padding-list">
                      <Link className="nav-link" aria-current="page" to="/jobs">Jobs</Link>
                    </li>
                    <li className="nav-item">
                      <Link className="btn btn-outline-primary px-4 py-2 box-shadow" to="/">Reach Us</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<Home />} />
              <Route path="/service" element={<Home />} />
              <Route path="/blog" element={<Home />} />
              <Route path="/jobs" element={<Home />} />
            </Routes>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
