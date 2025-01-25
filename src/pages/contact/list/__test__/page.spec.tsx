import { render, waitFor } from "@testing-library/react";

import ContactListPage from "../page";
import { MemoryRouter } from "react-router-dom";

describe("<ContactListPage />", () => {
  it("should render contact list page", async () => {
    const { unmount } = render(
      <MemoryRouter>
        <ContactListPage />
      </MemoryRouter>
    );

    await waitFor(() => expect(document.title).toEqual("Contact List"));

    unmount();
  });
});
