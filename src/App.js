import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.scss";
import Nav from "./Components/Nav";
import Home from "./Components/Home";
import Men from "./Components/Men";
import Women from "./Components/Women";
import Children from "./Components/Children";
import ArticlesDataJson from "./data/articlesData.json";
import "./style/articlespage.scss";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Nav />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/men">
            <Men articlesDataJson={ArticlesDataJson} />
          </Route>
          <Route path="/women">
            <Women articlesDataJson={ArticlesDataJson} />
          </Route>
          <Route path="/children">
            <Children articlesDataJson={ArticlesDataJson} />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
