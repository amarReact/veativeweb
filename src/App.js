
import React,{Fragment} from "react";
import Header from "./Component/Header/Header"
import Footer from "./Component/Footer"
import Home from "./Component/pages/Home"
import Carrerpassport from "./Component/pages/Carrerpassport"
import Carrerpathways from "./Component/pages/Carrerpathways"
import Learninghub from "./Component/pages/Learninghub"
import Favourites from "./Component/pages/Favourites"
import {Route, Switch} from "react-router-dom"

import './App.css';

function App() {
  return (
    <Fragment>
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/carrerpassport/" component={Carrerpassport} />
        <Route path="/carrerpathways/" component={Carrerpathways} />
        <Route path="/learninghub/" component={Learninghub} />
        <Route path="/favourites/" component={Favourites} />
      </Switch>

      <Footer />
    </Fragment>
  );
}

export default App;
