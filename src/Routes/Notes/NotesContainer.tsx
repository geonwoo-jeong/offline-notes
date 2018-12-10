import { GET_NOTES } from "queries";
import React, { Component } from "react";
import { Query } from "react-apollo";
import NotesPresenter from "./NotesPresenter";

export default class NotesContainer extends Component {
  public render() {
    return (
      <Query query={GET_NOTES}>
        {({ data }) => <NotesPresenter data={data} />}
      </Query>
    );
  }
}
