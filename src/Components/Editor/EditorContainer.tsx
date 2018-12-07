import React, { ChangeEventHandler, Component } from "react";
import EditorPresenter from "./EditorPresenter";

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

export default class EditorContainer extends Component<IProps, IState> {
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
      <EditorPresenter
        title={title}
        content={content}
        onInputChange={this.onInputChange}
        onSave={this.onSave}
      />
    );
  }

  public onInputChange: ChangeEventHandler<HTMLTextAreaElement> = event => {
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
