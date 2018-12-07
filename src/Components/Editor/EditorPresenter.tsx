import React, { ChangeEvent, SFC } from "react";
import MarkdownRenderer from "react-markdown-renderer";
import TextareaAutosize from "react-textarea-autosize";
import styled from "styled-components";

interface IProps {
  title: string;
  content: string;
  onInputChange: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  onSave: () => void;
}

const TitleInput = styled(TextareaAutosize)`
  font-size: 50px;
  font-weight: 600;
  width: 100%;
  &::placeholder {
    font-weight: 600;
  }
`;

const ContentPreview = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 50px;
`;

const ContentInput = styled(TextareaAutosize)`
  font-size: 18px;
  margin-top: 15px;
`;

const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 50px;
`;

const Button = styled.button``;

const EditorPresenter: SFC<IProps> = ({
  title,
  content,
  onInputChange,
  onSave
}) => (
  <>
    <TitleContainer>
      <TitleInput
        value={title}
        onChange={onInputChange}
        placeholder={"Untitled..."}
        name={"title"}
      />
      <Button onClick={onSave}>Save</Button>
    </TitleContainer>
    <ContentPreview>
      <ContentInput
        value={content}
        onChange={onInputChange}
        placeholder={"# This supports markdown!"}
        name={"content"}
      />
      <MarkdownRenderer markdown={content} className={"markdown"} />
    </ContentPreview>
  </>
);

export default EditorPresenter;
