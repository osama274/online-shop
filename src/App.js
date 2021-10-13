import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.scss";
import Nav from "./Components/Nav";
import Home from "./Components/Home";
import ShopGallery from "./Components/ShopGallery";
import menArticlesDataJson from "./data/menData.json";
import womenArticlesDataJson from "./data/womenData.json";
import childrenArticlesDataJson from "./data/childrenData.json";


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
            <ShopGallery articlesDataJson={menArticlesDataJson} />
          </Route>
          <Route path="/women">
            <ShopGallery articlesDataJson={womenArticlesDataJson} />
          </Route>
          <Route path="/children">
            <ShopGallery articlesDataJson={childrenArticlesDataJson} />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
