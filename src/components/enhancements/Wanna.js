import React from "react";

class Wanna extends React.Component<{
  id: string,
  func: Function
}> {
  constructor(props) {
    super(props);
  }
  render() {
    var wannaStyle = {
      padding: 5,
      backgroundColor: "#ff0000",
      margin: 10,
      height: 100,
      width: 100
    };
    return (
      <div style={wannaStyle}>
        <div>
          title{this.props.id}{" "}
          <button onClick={e => this.onClick(e)}>消去</button>{" "}
        </div>
        <div>body</div>
      </div>
    );
  }
  onClick() {
    this.props.func(this.props.id);
  }
}

export default Wanna;
