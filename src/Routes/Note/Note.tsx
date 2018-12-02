import React, { Component } from "react";
import { Query } from "react-apollo";
import MarkdownRenderer from "react-markdown-renderer";
import { Link, RouteComponentProps } from "react-router-dom";
import styled from "styled-components";
import { GET_NOTE } from "../../queries";

interface IProps extends RouteComponentProps<any> {}

const TitleComponent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 50px;
`;

const Title = styled.h1`
  font-size: 50px;
  margin: 0;
  padding: 0;
`;

const Button = styled.button``;

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
                <TitleComponent>
                  <Title>{title}</Title>
                  <Link to={`/edit/${noteId}`}>
                    <Button>Edit</Button>
                  </Link>
                </TitleComponent>
                <MarkdownRenderer markdown={content} />
              </>
            );
          } else {
            return (
              <>
                <TitleComponent>
                  <Title>This note does not exist.</Title>
                </TitleComponent>
              </>
            );
          }
        }}
      </Query>
    );
  }
}
