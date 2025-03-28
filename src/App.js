import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// Pages
import Home from "./Pages/Home";

// components
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import ArrowUp from "./Components/ArrowUp";

function App() {
  return (
    <div className="app">
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
        </Switch>
        <ArrowUp />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
