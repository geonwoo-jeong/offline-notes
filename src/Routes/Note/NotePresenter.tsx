import React, { SFC } from "react";
import MarkdownRenderer from "react-markdown-renderer";
import Title from "../../Components/Title";

interface IProps {
  data: any;
}

const NotePresenter: SFC<IProps> = ({ data }) => {
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
      <Title title={"This Note does not exist."} button={"Back"} link={"/"} />
    );
  }
};

export default NotePresenter;
