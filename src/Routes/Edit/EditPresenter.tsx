import Editor from "Components/Editor";
import React, { SFC } from "react";

interface IProps {
  data: any;
  onSave: any;
}

const EditPresenter: SFC<IProps> = ({ data, onSave }) => {
  const {
    note: { title, content, id }
  } = data;
  return (
    <Editor
      title={title}
      content={content}
      id={id}
      onSave={onSave}
      onChange={null}
    />
  );
};

export default EditPresenter;
