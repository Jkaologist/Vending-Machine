import React from "react";
import { Route } from "react-router-dom";
import VendingMachine from "./VendingMachine";
import Soda from "./Soda";
import Chips from "./Chips";
import Sardines from "./Sardines";

function Home() {
  return (
  <div>
    <Route exact path="/">
      <VendingMachine />
    </Route>
    <Route exact path="/soda">
      <Soda />
    </Route>
    <Route exact path="/chips">
      <Chips />
    </Route>
    <Route exact path="/sardines">
      <Sardines />
    </Route>
  </div>
  )
};

export default Home;