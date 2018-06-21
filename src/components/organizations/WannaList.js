import React from "react";
import Wanna from "../enhancements/Wanna";

class WannaList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      wannas: [{ id: 0 }]
    };
    this.deleteWanna = this.deleteWanna.bind(this);
  }
  render() {
    var wannaListStyle = {
      width: "100%",
      display: "flex",
      flexWrap: "wrap"
    };
    var wannas = this.state.wannas;
    var list = [];
    for (var i in this.state.wannas) {
      list.push(
        <Wanna func={this.deleteWanna} key={wannas[i].id} id={wannas[i].id} />
      );
    }
    return (
      <div>
        WannaList
        <div style={wannaListStyle}>{list}</div>
      </div>
    );
  }
  addWanna() {
    var wannas = this.state.wannas;
    var wanna = wannas[wannas.length - 1];
    var id = wanna.id;
    wannas.push({ id: id + 1 });
    this.setState({ wannas: wannas });
  }
  deleteWanna(id) {
    var wannas = this.state.wannas;
    for (var index in wannas) {
      if (wannas[index].id == id) {
        wannas.splice(index, 1);
        break;
      }
    }
    this.setState({ wannas: wannas });
  }
}

export default WannaList;
