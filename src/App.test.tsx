// Illustrates how to write jsdom tests.

import { test } from "vitest";
import { render } from "@testing-library/react";

import { App } from "./App";

test("render the app without errors", () => {
  render(<App />);
});
