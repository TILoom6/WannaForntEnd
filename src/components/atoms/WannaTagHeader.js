import React from "react";

class WannaTagHeader extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <div>{props.title}</div>;
  }
}

export default WannaTagHeader;
