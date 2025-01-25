import { render, screen } from "@testing-library/react";
import ContactList from "../contact-list";
import { MemoryRouter } from "react-router-dom";
import DeleteContactDialog from "../__mock__/delete-contact-dialog";

describe("<ContactList />", () => {
  it("should render component contact list", () => {
    render(
      <MemoryRouter>
        <ContactList />
      </MemoryRouter>
    );

    const getInput = screen.getByTestId("input-search");
    const getBtnClear = screen.getByTestId("button-clear");
    const getBtnSearch = screen.getByTestId("button-search");
    const getTable = screen.getByTestId("table-contact-list");

    expect(getInput).toBeInTheDocument();
    expect(getBtnClear).toBeInTheDocument();
    expect(getBtnSearch).toBeInTheDocument();
    expect(getTable).toBeInTheDocument();
  });

  it("should render DeleteContactDialog", () => {
    render(<DeleteContactDialog />);

    expect(screen.getByText("DeleteContactDialog")).toBeInTheDocument();
  });
});
