import React from "react";

class Heder extends React.Component {
  constructor(props) {
    super(props);

    // stateの初期値を設定
    this.state = {
      index: props.index
    };
    console.log(this.state);
  }
  render() {
    var count = { count: this.state.index };
    return (
      <div>
        Heder
        <button onClick={e => this.onClick(e)}>追加</button>
        {count.count}
      </div>
    );
  }
  onClick(e) {
    this.setState({ index: this.state.index + 1 });
    console.log(this.state);
  }
}

export default Heder;
