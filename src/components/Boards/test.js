import React from "react";
import {
  BrowserRouter as Router,
} from "react-router-dom";
import Enzyme, { render } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Boards from "./";

const boards = {
  all: [
    {
      id: "0",
      title: "project-0",
      taskGroups: ["0", "1"]
    },
    {
      id: "1",
      title: "project-1",
      taskGroups: ["2", "3"]
    }
  ]
};

Enzyme.configure({ adapter: new Adapter() });

describe("boards", () => {
  it("should render boards", () => {
    const container = render(
      <Router>
        <Boards boards={boards} />
      </Router>
    );

    expect(container.find(".test__boards-item").length).toEqual(
      boards.all.length
    );
  });
});
