import React, { useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import Content from "./components/Content";
import LoadingSpinner from "./components/LoadingSpinner";
import Navbar from "./components/Navbar";

function App() {
  useEffect(() => {
    let prevScrollpos = window.pageYOffset;
    window.onscroll = () => {
      var currentScrollPos = window.pageYOffset;
      if (prevScrollpos > currentScrollPos) {
        document.getElementById("nav-bottom").style.bottom = "0";
      } else {
        document.getElementById("nav-bottom").style.bottom = "-70px";
      }
      prevScrollpos = currentScrollPos;
    };
  }, []);

  return (
    <div className="App">
      <LoadingSpinner />
      <Router>
        <Navbar />
        <div className="my-3">
          <Content />
        </div>
      </Router>
    </div>
  );
}

export default App;
