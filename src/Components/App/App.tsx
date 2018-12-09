import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Add from "../../Routes/Add";
import Edit from "../../Routes/Edit";
import Note from "../../Routes/Note";
import Notes from "../../Routes/Notes";

class App extends Component {
  public render() {
    return (
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Switch>
          <Route
            exact={true}
            path={process.env.PUBLIC_URL + "/"}
            component={Notes}
          />
          <Route
            exact={true}
            path={process.env.PUBLIC_URL + "/add"}
            component={Add}
          />
          <Route
            exact={true}
            path={process.env.PUBLIC_URL + "/edit/:id"}
            component={Edit}
          />
          <Route
            exact={true}
            path={process.env.PUBLIC_URL + "/note/:id"}
            component={Note}
          />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
