import React from "react";
import "./App.css";

import { Route, Switch } from "react-router-dom";
//pages
import Home from "./pages/Home";
import Items from "./pages/Items";
import SingleItem from "./pages/SingleItem";
import Error from "./pages/Error";
//components
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

import "bootstrap/dist/css/bootstrap.min.css";
//import { FaBeer } from "react-icons/fa";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/items/" component={Items} />
        <Route exact path="/items/:slug" component={SingleItem} />
        <Route component={Error} />
      </Switch>
    </>
  );
}

export default App;
