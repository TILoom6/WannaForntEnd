import React from "react";
import { shallow, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import WannaTagHeader from "components/atoms/WannaTagHeader";

configure({ adapter: new Adapter() });

test("show wanna tag header", () => {
  const wannaTagHeader = shallow(
    <WannaTagHeader title="TITLE" user="ogata-ry" date="2018/07/13" />
  );

  // WannaTagHeaderが持っている子要素取得
  const headerChildren = wannaTagHeader.children();

  // ヘッダー本文が正しい
  expect(headerChildren.at(0).text()).toEqual("TITLE");
  // 投稿ユーザーが正しい
  expect(headerChildren.at(1).text()).toEqual("ogata-ry");
  // 投稿日が正しい
  expect(headerChildren.at(2).text()).toEqual("2018/07/13");

  // 削除ボタンがある
  expect(wannaTagHeader.find("button").text()).toEqual("DELETE");
});
