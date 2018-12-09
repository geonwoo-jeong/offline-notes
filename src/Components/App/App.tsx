import React, { SFC } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Add from "../../Routes/Add";
import Edit from "../../Routes/Edit";
import Note from "../../Routes/Note";
import Notes from "../../Routes/Notes";

const App: SFC = () => (
  <BrowserRouter>
    <Switch>
      <Route exact={true} path={"/"} component={Notes} />
      <Route path={"/add"} component={Add} />
      <Route path={"/edit/:id"} component={Edit} />
      <Route path={"/note/:id"} component={Note} />
    </Switch>
  </BrowserRouter>
);

export default App;
