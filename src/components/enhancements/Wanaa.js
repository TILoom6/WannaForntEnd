import React from "react";

class Wanna extends React.Component {
  render() {
    var wannaStyle = {
      padding: 5,
      backgroundColor: "#ff0000",
      height: 100,
      width: 100
    };
    return (
      <div style={wannaStyle}>
        <div>title</div>
        <div>body</div>
      </div>
    );
  }
}

export default Wanna;
