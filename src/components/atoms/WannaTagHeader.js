/** @flow */
import React from "react";

type Props = {
  title: string
};

class WannaTagHeader extends React.Component<Props> {
  render() {
    return <div>{this.props.title}</div>;
  }
}

export default WannaTagHeader;
