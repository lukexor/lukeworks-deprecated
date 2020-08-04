import React from "react";
import { render } from "@testing-library/react";
import Header from "./Header";

test('renders header h1', () => {
  const { getByText } = render(<Header />);
  const headerTitle = getByText(/lucas petherbridge/i);
  expect(headerTitle).toBeInTheDocument();
  const headerSubtitle = getByText(/software engineer/i);
  expect(headerSubtitle).toBeInTheDocument();
});
