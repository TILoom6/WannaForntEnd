import React from "react";
import { connect } from "react-redux";

import { fetchWannatags } from "../../thunks/WannatagsThunk";
import Header from "../organizations/Hedar";
import Footer from "../organizations/Footer";
import WannaList from "../organizations/WannaList";

class WannaTagList extends React.Component<{
  initialFetchWannatags: Function,
  isLoading: boolean,
  wannatags: Array<any>
}> {
  componentDidMount() {
    this.props.initialFetchWannatags();
  }

  render() {
    return (
      <div>
        <Header />
        WannaTagList
        {this.props.isLoading ? (
          <div>loading...</div>
        ) : (
          <WannaList wannatags={this.props.wannatags} />
        )}
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
    initialFetchWannatags() {
      fetchWannatags(dispatch, new Date().getTime());
    }
  };
};

const wrappedComponent = connect(
  mapStateToProps,
  mapDispatchToProps
)(WannaTagList);

export default wrappedComponent;
