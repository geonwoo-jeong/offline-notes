import React, { Component } from "react";
import { Query } from "react-apollo";
import { RouteComponentProps } from "react-router-dom";
import { GET_NOTE } from "../../queries";
import NotePresenter from "./NotePresenter";

interface IProps extends RouteComponentProps<any> {}

export default class NoteContainer extends Component<IProps> {
  public render() {
    const {
      match: {
        params: { id }
      }
    } = this.props;
    return (
      <Query query={GET_NOTE} variables={{ id }}>
        {({ data }) => <NotePresenter data={data} />}
      </Query>
    );
  }
}
