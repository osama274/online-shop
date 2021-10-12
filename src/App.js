import React from "react";
import Nav from "./Components/Nav";
import Home from "./Components/Home";
import Men from "./Components/Men";
import Women from "./Components/Women";
import Children from "./Components/Children";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.scss";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Nav />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/men" component={Men} />
          <Route path="/women" component={Women} />
          <Route path="/children" component={Children} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
