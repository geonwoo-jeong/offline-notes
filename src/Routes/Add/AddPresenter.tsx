import Editor from "Components/Editor";
import React, { SFC } from "react";

interface IProps {
  onSave: (title: string, content: string) => void;
  onChange: any;
}

const AddPresenter: SFC<IProps> = ({ onSave }) => (
  <Editor onChange={null} onSave={onSave} />
);

export default AddPresenter;
