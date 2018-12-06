import gql from "graphql-tag";
import React, { Component } from "react";
import { Mutation, MutationFn, Query } from "react-apollo";
import { RouteComponentProps } from "react-router-dom";
import { GET_NOTE } from "../../queries";
import { updateNote, updateNoteVariables } from "../../types/api";
import EditPresenter from "./EditPresenter";

interface IProps extends RouteComponentProps<any> {}

const EDIT_NOTE = gql`
  mutation editNote($id: Int!, $title: String!, $content: String!) @client {
    editNote(id: $id, title: $title, content: $content) {
      id
    }
  }
`;

class EditNoteMutation extends Mutation<updateNote, updateNoteVariables> {}

export default class EditContainer extends Component<IProps> {
  private editNote!: MutationFn<updateNote, updateNoteVariables>;

  public render() {
    const {
      match: {
        params: { id }
      }
    } = this.props;
    return (
      <Query query={GET_NOTE} variables={{ id }}>
        {({ data }) =>
          data.note ? (
            <EditNoteMutation mutation={EDIT_NOTE}>
              {editNote => {
                this.editNote = editNote;
                return <EditPresenter data={data} onSave={this.onSave} />;
              }}
            </EditNoteMutation>
          ) : null
        }
      </Query>
    );
  }

  public onSave = (title: string, content: string, id: number) => {
    const {
      history: { push }
    } = this.props;
    if (title !== "" && content !== "" && id) {
      this.editNote({ variables: { title, content, id } });
      push("/");
    }
  };
}
