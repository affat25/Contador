import React from "react";
import { BrowserRouter, Routes, Route, Link, NavLink } from "react-router-dom";
import PostsListPage from "./pages/PostsListPage";
import ShowTransactionsPage from "./pages/ShowTransactionsPage";
import AboutUsPage from "./pages/AboutUsPage";
import SignUpPage from "./pages/SignUpPage";

import "./App.css";

function Navigation(props) {
  return (
    // navbar-dark bg-dark
    <nav className="navbar navbar-expand-sm aa-nav navbar-dark shadow mb-5">
      <div className="container-fluid col-10">
        <Link className="navbar-brand aa-blue-txt " to="/">
          Contador
        </Link>
        <ul className="navbar-nav me-auto">
          <li className="nav-item">
            <NavLink className="nav-link mx-1" to="/about-us">
              About Us
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link mx-1" to="/form">
              Fill-out Form
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <div className="container-xl ">
        {" "}
        {/*text-center*/}
        <div className="row ">
          {" "}
          {/*justify-content-center*/}
          <Routes>
            <Route path="/account/:id" element={<ShowTransactionsPage />} />
            <Route path="/about-us" element={<AboutUsPage />} />
            <Route path="/" element={<PostsListPage />} />
            <Route path="/form" element={<SignUpPage />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
