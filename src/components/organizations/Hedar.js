import React from "react";
import { connect } from "react-redux";

class Heder extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    var count = { count: this.props.index };
    return (
      <div>
        Heder
        <button onClick={e => this.func(e)}>追加</button>
      </div>
    );
  }
  func(e) {
    console.log(this.props);
    this.props.dispatch({
      type: "SETINDEX",
      value: this.props.index + 1
    });
  }
}
const mapStateToProps = state => {
  return state;
};
const wrappedComponent = connect(mapStateToProps)(Heder);
export default wrappedComponent;
