import React, { useState } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import "./App.css";

import Header from "./components/ui/header";
import Navigation from "./components/ui/navigation";

import Home from "./layouts/home";
import Impressum from "./layouts/impressum";
import Kontakt from "./layouts/kontakt";
import Landschaft from "./layouts/landschaft";
import Login from "./layouts/login";
import Natur from "./layouts/natur";
import Reisen from "./layouts/reisen";

function App() {
  const [navBarOpen, setNavBarOpen] = useState(false);

  return (
    <>
      <Header navBarOpen={navBarOpen} setNavBarOpen={setNavBarOpen} />
      <Navigation navBarOpen={navBarOpen} setNavBarOpen={setNavBarOpen} />
      <Switch>
        <Route path="/impressum" component={Impressum} />
        <Route path="/kontakt" component={Kontakt} />
        <Route path="/landschaft" component={Landschaft} />
        <Route path="/login" component={Login} />
        <Route path="/natur" component={Natur} />
        <Route path="/reisen" component={Reisen} />
        <Route path="/" exact component={Home} />
        <Redirect to="/" />
      </Switch>
    </>
  );
}

export default App;
