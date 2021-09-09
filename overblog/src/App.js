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
import AdminLogin from "./Components/Admin/AdminLogin";
import AdminDashboard from "./Components/Admin/AdminDashboard";
import AdminBlog from "./Components/Admin/AdminBlog";
import AdminBlogNew from "./Components/Admin/AdminBlogNew";
import AdminBlogEdit from "./Components/Admin/AdminBlogEdit";

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
          <Route path="/admin" component={AdminLogin} />
          <Route path="/adminDashboard" component={AdminDashboard} />
          <Route path="/adminBlog" component={AdminBlog} />
          <Route path="/adminBlogNew" component={AdminBlogNew} />
          <Route path="/adminBlogEdit" component={AdminBlogEdit} />
          <Route path="*" component={NotFound} />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;
