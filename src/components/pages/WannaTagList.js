import React from "react";
import Header from "../organizations/Hedar";
import Footer from "../organizations/Footer";
import WannaList from "../organizations/WannaList";

class WannaTagList extends React.Component {
  constructor(props) {
    super(props);

    // stateの初期値を設定
    this.state = {
      index: 0
    };
  }
  render() {
    console.log(this.state);
    return (
      <div>
        <Header index={this.state.index} />
        WannaTagList
        <WannaList />
        <Footer />
      </div>
    );
  }
}

export default WannaTagList;
