import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

import NotFound from "../not-found";

describe("<NotFound />", () => {
  it("should render notfound page", () => {
    render(
      <MemoryRouter>
        <NotFound />
      </MemoryRouter>
    );

    expect(screen.getByText("404 - NotFound")).toBeInTheDocument();
    expect(screen.getByText("Go to home page")).toBeInTheDocument();
  });
});
