import React, { Component } from "react";
import { Query } from "react-apollo";
import MarkdownRenderer from "react-markdown-renderer";
import { RouteComponentProps } from "react-router-dom";
import Title from "../../Components/Title";
import { GET_NOTE } from "../../queries";

interface IProps extends RouteComponentProps<any> {}

export default class Note extends Component<IProps> {
  public render() {
    const {
      match: {
        params: { id }
      }
    } = this.props;

    return (
      <Query query={GET_NOTE} variables={{ id }}>
        {({ data }) => {
          if (data.note) {
            const {
              note: { title, id: noteId, content }
            } = data;
            return (
              <>
                <Title title={title} button={"Edit"} link={`/edit/${noteId}`} />
                <MarkdownRenderer markdown={content} />
              </>
            );
          } else {
            return (
              <Title
                title={"This Note does not exist."}
                button={"back to index"}
                link={"/"}
              />
            );
          }
        }}
      </Query>
    );
  }
}
