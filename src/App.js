import React from "react";
import './App.css';
import {BrowserRouter as Router,Route, Switch} from "react-router-dom";

import HomePage  from "./components/HomePage";
import About  from "./components/About";
import NotFound  from "./components/NotFound";
import ArticleList  from "./components/ArticleList";
import ArticlePage  from "./components/ArticlePage";
import Example  from "./Navigation";
class App extends React.Component{
  render(){
    return(
      <Router>
        <div className="container">
          <div className="row">
            <div className="col">
            <Example/>
              <Switch>
                <Route path="/" exact component = {HomePage}/>
                <Route path="/about" component = {About}/>
                <Route path="/articlelist" component = {ArticleList}/>
                <Route path="/article/:name" component = {ArticlePage}/>
                <Route component = {NotFound}/>
              </Switch>
            </div>
          </div>
        </div>
      </Router>
    )
  }
}

export default App;
