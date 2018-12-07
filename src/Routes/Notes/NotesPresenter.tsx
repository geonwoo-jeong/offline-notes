import React, { SFC } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { ReactComponent as Plus } from "../../Components/Icons/plus.svg";
import Title from "../../Components/Title";

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

const Subtitle = styled.h2`
  color: #a2a19e;
  font-weight: 400;
`;

interface IProps {
  data: any;
}

const NotesPresenter: SFC<IProps> = ({ data }) => (
  <>
    <Title title={"Offline Notes"} link={"/add"} button={<Plus />} />
    <Subtitle>Taking notes while we learn.</Subtitle>
    {data.notes &&
      data.notes.map(note => (
        <Link to={`/note/${note.id}`} key={note.id}>
          <Note>{note.title}</Note>
        </Link>
      ))}
  </>
);

export default NotesPresenter;
