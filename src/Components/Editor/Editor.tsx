import React, { Component } from "react";
import MarkdownRenderer from "react-markdown-renderer";
import TextareaAutosize from "react-textarea-autosize";
import styled from "styled-components";

interface IProps {
  onChange: any;
  onSave: any;
  title?: string;
  content?: string;
  id?: number;
}

interface IState {
  title: string;
  content: string;
  id: number;
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

export default class Editor extends Component<IProps, IState> {
  constructor(props) {
    super(props);
    this.state = {
      content: props.content || "",
      id: props.id || null,
      title: props.title || ""
    };
  }

  public render() {
    const { title, content } = this.state;
    return (
      <>
        <TitleContainer>
          <TitleInput
            value={title}
            onChange={this.onInputChange}
            placeholder={"Untitled..."}
            name={"title"}
          />
          <Button onClick={this.onSave}>Save</Button>
        </TitleContainer>
        <ContentPreview>
          <ContentInput
            value={content}
            onChange={this.onInputChange}
            placeholder={"# This supports markdown!"}
            name={"content"}
          />
          <MarkdownRenderer markdown={content} className={"markdown"} />
        </ContentPreview>
      </>
    );
  }

  public onInputChange: any = event => {
    const {
      target: { value, name }
    } = event;
    this.setState({
      [name]: value
    } as any);
  };

  public onSave = () => {
    const { onSave } = this.props;
    const { title, content, id } = this.state;
    onSave(title, content, id);
  };
}
