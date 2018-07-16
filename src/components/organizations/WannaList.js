import React from "react";
import Wanna from "../enhancements/Wanna";

const WannaList = (props: { wannatags: Array<any> }) => {
  const deleteWanna = () => {
    throw Error("not implemented");
  };
  const wannaListStyle = {
    width: "100%",
    display: "flex",
    flexWrap: "wrap"
  };
  const list = [];
  for (const wannatag of props.wannatags) {
    list.push(
      <Wanna
        func={deleteWanna}
        key={wannatag.wannnatagId}
        id={wannatag.wannnatagId}
      />
    );
  }
  return (
    <div>
      WannaList
      <div style={wannaListStyle}>{list}</div>
    </div>
  );
};

export default WannaList;
