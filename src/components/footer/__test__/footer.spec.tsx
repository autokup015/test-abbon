import { render, screen } from "@testing-library/react";
import Footer from "../footer";

describe("<Footer />", () => {
  it("should render footer", () => {
    render(<Footer />);

    const getImg = screen.getAllByRole("img");

    expect(getImg.length).toBe(3);
  });
});
