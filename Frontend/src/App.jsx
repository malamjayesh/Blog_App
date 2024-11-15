import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Navbar from "./pages/Navbar";
import Home from "./pages/Home";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import Blogadd from "./pages/Blogadd";
import Bloglist from "./pages/Bloglist";
import Editblog from "./pages/Editblog";

function App() {
  const token = localStorage.getItem("token");

  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route
            path="/blogadd"
            element={token ? <Blogadd /> : <Navigate to="/signin" />}
          />
          <Route
            path="/blogedit/:id"
            element={token ? <Editblog /> : <Navigate to="/signin" />}
          />
          <Route
            path="/bloglist"
            element={token ? <Bloglist /> : <Navigate to="/signin" />}
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
