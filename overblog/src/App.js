import React, { Component } from "react";
import Nav from "./Components/Navbar";
import "../src/style/style.css";
import Footer from "./Components/Footer";
import { Switch, Route } from "react-router-dom";
import HomePage from "./Components/HomePage";
import About from "./Components/About";
import Blog from "./Components/Blog";
import Contact from "./Components/Contact";
import NotFound from "./Components/NotFound";
import BlogDetail from "./Components/BlogDetail";

class App extends Component {
  componentDidMount() {}
  render() {
    return (
      <div className="App">
        <Nav />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/about" component={About} />
          <Route path="/blog" component={Blog} />
          <Route path="/blogDetail" component={BlogDetail} />
          <Route path="/contact" component={Contact} />
          <Route path="*" component={NotFound} />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;
