import { Component } from "react";

export default class Editor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content: props.content || "",
      id: props.content || null,
      title: props.title || ""
    };
  }

  public render() {
    // const { title, content } = this.state;
    return <></>;
  }
}
