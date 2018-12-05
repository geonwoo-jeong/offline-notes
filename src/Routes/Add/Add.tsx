import gql from "graphql-tag";
import React, { Component } from "react";
import { Mutation, MutationFn } from "react-apollo";
import { RouteComponentProps } from "react-router-dom";
import Editor from "../../Components/Editor";

const ADD_NOTE = gql`
  mutation createNote($title: String!, $content: String!) @client {
    createNote(title: $title, content: $content) {
      id
    }
  }
`;

interface IAddNote {
  id: number;
}

interface IAddNoteVariables {
  title: string;
  content: string;
}

interface IProps extends RouteComponentProps<any> {}

class AddNoteMutation extends Mutation<IAddNote, IAddNoteVariables> {}

export default class Add extends Component<IProps> {
  private createNote!: MutationFn<IAddNote, IAddNoteVariables>;
  public onSave = (title: string, content: string) => {
    const {
      history: { push }
    } = this.props;
    if (title !== "" && content !== "") {
      this.createNote({ variables: { title, content } });
      push("/");
    }
  };
  public render() {
    return (
      <AddNoteMutation mutation={ADD_NOTE}>
        {createNote => {
          this.createNote = createNote;
          return <Editor onChange={null} onSave={this.onSave} />;
        }}
      </AddNoteMutation>
    );
  }
}
