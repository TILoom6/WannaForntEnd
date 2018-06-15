import React from "react";
import { shallow, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import WannaTagHeader from "components/atoms/WannaTagHeader";

configure({ adapter: new Adapter() });

test("show wanna tag header", () => {
  const wannaTagHeader = shallow(<WannaTagHeader title="HEADER TITLE" />);

  expect(wannaTagHeader.text()).toEqual("HEADER TITLE");
});

// import React from "react";
// import { shallow, configure } from "enzyme";
// import Adapter from "enzyme-adapter-react-16";
// import Message from "components/atoms/Message";

// configure({ adapter: new Adapter() });

// test("show message", () => {
//   const message = shallow(<Message message="test message" />);

//   expect(message.text()).toEqual("test message");
// });
