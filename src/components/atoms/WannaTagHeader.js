/** @flow */
import React from "react";

type Props = {
  title: string,
  user: string,
  date: stirng
};

class WannaTagHeader extends React.Component<Props> {
  render() {
    return (
      <div>
        <div>{this.props.title}</div>
        <div>{this.props.user}</div>
        <div>{this.props.date}</div>
        <button>DELETE</button>
      </div>
    );
  }
}

export default WannaTagHeader;
