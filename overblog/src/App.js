import React, { Component } from "react";
import Nav from "./Components/Navbar";
import "../src/style/style.css";
import Footer from "./Components/Footer";
import { Switch, Route, useRouteMatch } from "react-router-dom";
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
import axios from "axios";

class App extends Component {
  
  constructor(props) {
    super(props);
    this.deleteBlog = this.deleteBlog.bind(this);
    this.state = { blogs: [] };
  }

  componentDidMount() {
    this.getBlogsDataFromDatabase();
  }
  getBlogsDataFromDatabase (){
    axios
      .get("http://localhost:5000/admin/blogs/")
      .then((response) => {
        this.setState({ blogs: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
  }
  deleteBlog(id) {
    axios.delete("http://localhost:5000/admin/blogs/" + id).then((response) => {
      console.log(response.data);
    });

    this.setState({
      blogs: this.state.blogs.filter((el) => el._id !== id),
    });
  }

  render() {
    return (
      <div className="App">
        <Nav />
        <Switch>
          <Route exact path="/" render={props=>(<HomePage {...props} blogs={this.state.blogs} getData={this.getBlogsDataFromDatabase}/> )}/>
          <Route path="/about" component={About} />
          <Route path="/blog" render={props=>(<Blog {...props} blogs={this.state.blogs} getData={this.getBlogsDataFromDatabase}/> )} />
          <Route path="/blogDetail/" render={props=>(<BlogDetail {...props} blogs={this.state.blogs} getData={this.getBlogsDataFromDatabase}/> )}  />
          <Route path="/contact" component={Contact} />
          <Route path="/admin" component={AdminLogin} />
          <Route path="/adminDashboard" component={AdminDashboard} />
          <Route path="/adminBlog" render={props=>(<AdminBlog {...props} blogs={this.state.blogs} getData={this.getBlogsDataFromDatabase} deleteBlog={this.deleteBlog} /> )} />
          <Route path="/adminBlogNew" component={AdminBlogNew} />
          <Route path="/adminBlogEdit" component={AdminBlogEdit} />
          <Route component={NotFound} />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;
