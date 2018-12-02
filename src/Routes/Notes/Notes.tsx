import React, { Component } from "react";
import { Query } from "react-apollo";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { ReactComponent as Plus } from "../../Components/plus.svg";
import Title from "../../Components/Title";
import { GET_NOTES } from "../../queries";

const Subtitle = styled.h2`
  color: #a2a19e;
  font-weight: 400;
`;

const Note = styled.div`
  padding: 10px;
  padding-left: 5px;
  transition: background-color 0.1s linear;
  cursor: pointer;
  border-radius: 5px;
  margin-bottom: 10px;
  &:hover {
    background-color: #eee;
  }
`;

export default class NotesContainer extends Component {
  public render() {
    return (
      <>
        <Title title={"Offline Notes"} link={"/add"} button={<Plus />} />
        <Subtitle>Taking notes while we learn.</Subtitle>
        <Query query={GET_NOTES}>
          {({ data }) => {
            if (data.notes) {
              return data.notes.map(note => (
                <Link to={`/note/${note.id}`} key={note.id}>
                  <Note>{note.title}</Note>
                </Link>
              ));
            } else {
              return <div>No notes</div>;
            }
          }}
        </Query>
      </>
    );
  }
}
