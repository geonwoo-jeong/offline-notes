import React, { SFC } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Add from "Routes/Add";
import Edit from "Routes/Edit";
import Note from "Routes/Note";
import Notes from "Routes/Notes";

const App: SFC = () => (
  <BrowserRouter basename={""}>
    <Switch>
      <Route exact={true} path={"/"} component={Notes} />
      <Route exact={true} path={"/add"} component={Add} />
      <Route exact={true} path={"/edit/:id"} component={Edit} />
      <Route exact={true} path={"/note/:id"} component={Note} />
    </Switch>
  </BrowserRouter>
);

export default App;
