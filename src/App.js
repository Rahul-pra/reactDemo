//import logo from './logo.svg';
import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Helmet } from "react-helmet";
import Header from './Components/Header';
import Home from './Components/Home';
import Footer from './Components/Footer';
import Features from './Components/Features';
import About from './Components/About';

class App extends Component{

  render() {
    return (
      <Router>
        <div className="App">
          <Helmet>
            <script src="js/modernizer.js"></script>
          </Helmet>
          <Header />
          <Route exact path="/" component={Home}/>
          <Route path="/home" component={Home}/>
          <Route path="/about" component={About}/>
          <Route path="/features" component={Features}/>

          <Footer />
          <Helmet>
            <script src="js/all.js"></script>
            <script src="js/custom.js"></script>
            <script src="js/timeline.min.js"></script>
            <script>
                timeline(document.querySelectorAll('.timeline'),);
            </script>
          </Helmet>
        </div>
      </Router>
    );
  }
}

export default App;
