import React from "react";
import { connect } from "react-redux";

import Header from "../organizations/Hedar";
import Footer from "../organizations/Footer";
import WannaList from "../organizations/WannaList";

class WannaTagList extends React.Component {
  constructor(props) {
    super(props);
    this.setIndex = this.setIndex.bind(this);
    // stateの初期値を設定
    this.state = {
      index: 0
    };
  }
  render() {
    var count = { count: this.state.index };
    return (
      <div>
        <Header />
        WannaTagList
        <div>{this.props.index}</div>
        {count.count}
        <WannaList ref="wannaList" index={count.count} />
        <Footer />
      </div>
    );
  }
  setIndex(index) {
    this.setState({ index: index });
    this.refs.wannaList.addWanna();
  }
}

const mapStateToProps = state => {
  return state;
};

const wrappedComponent = connect(mapStateToProps)(WannaTagList);

export default wrappedComponent;
