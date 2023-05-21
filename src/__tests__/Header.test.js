import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import React from "react";

import Header from "../components/Header";

test("displays the text 'hello from the Header!'", () => {
  render(<Header />);

  const element = screen.queryByText("please pass this test");

  screen.debug(element);

  expect(screen.queryByText("hello from the Header!")).toBeInTheDocument();
});
