import React from "react";
import { connect } from "react-redux";

import { fetchWannatags } from "../../thunks/WannatagsThunk";
import Header from "../organizations/Hedar";
import Footer from "../organizations/Footer";
import WannaList from "../organizations/WannaList";

class WannaTagList extends React.Component {
  componentDidMount() {
    this.props.fetchWannatags();
  }

  render() {
    return (
      <div>
        <Header />
        WannaTagList
        <WannaList wannatags={this.props.wannatags} />
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return state;
};

const mapDispatchToProps = dispatch => {
  return {
    fetchWannatags() {
      fetchWannatags(dispatch);
    }
  };
};

const wrappedComponent = connect(
  mapStateToProps,
  mapDispatchToProps
)(WannaTagList);

export default wrappedComponent;
