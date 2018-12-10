import gql from "graphql-tag";
import React, { Component } from "react";
import { Mutation, MutationFn } from "react-apollo";
import { RouteComponentProps } from "react-router-dom";
import { addNote, addNoteVariables } from "types/api";
import AddPresenter from "./AddPresenter";

interface IProps extends RouteComponentProps<any> {}
class AddNoteMutation extends Mutation<addNote, addNoteVariables> {}

const ADD_NOTE = gql`
  mutation createNote($title: String!, $content: String!) @client {
    createNote(title: $title, content: $content) {
      id
    }
  }
`;

export default class AddContainer extends Component<IProps> {
  private createNote!: MutationFn<addNote, addNoteVariables>;

  public render() {
    return (
      <AddNoteMutation mutation={ADD_NOTE}>
        {createNote => {
          this.createNote = createNote;
          return <AddPresenter onChange={null} onSave={this.onSave} />;
        }}
      </AddNoteMutation>
    );
  }

  public onSave = (title: string, content: string) => {
    const {
      history: { push }
    } = this.props;
    if (title !== "" && content !== "") {
      this.createNote({ variables: { title, content } });
      push("/");
    }
  };
}
