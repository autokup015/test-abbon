import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import CreateList from "../create-list";
import TextDialog from "../__mock__/text-dialog";
import { TCreateList } from "../schema/create-schema";
import { ReactNode } from "react";
import { FormProvider, useForm } from "react-hook-form";

describe("<CreateList />", () => {
  const mockDefaultValues: TCreateList = {
    id: "",
    name: "",
    age: 0,
  };

  const Wrapper = ({ children }: { children: ReactNode }) => {
    const formMethods = useForm<TCreateList>({
      defaultValues: mockDefaultValues,
    });
    return <FormProvider {...formMethods}>{children}</FormProvider>;
  };

  const setup = () => {
    const args = render(
      <MemoryRouter>
        <Wrapper>
          <CreateList />
        </Wrapper>
      </MemoryRouter>
    );

    return {
      ...args,
    };
  };

  it("should render create list page", () => {
    setup();

    const getInputName = screen.getByTestId("input-name");
    const getInputAge = screen.getByTestId("input-age");
    const getBtnSubmit = screen.getByTestId("button-submit-data");

    expect(getInputName).toBeInTheDocument();
    expect(getInputAge).toBeInTheDocument();
    expect(getBtnSubmit).toBeInTheDocument();
  });

  it("should render dialog in list page", () => {
    render(<TextDialog />);

    expect(screen.getByText("TextDialog")).toBeInTheDocument();
  });

  it("should show validate text", async () => {
    setup();

    const getBtnSubmit = screen.getByTestId("button-submit-data");

    fireEvent.click(getBtnSubmit);

    await waitFor(() => {
      expect(
        screen.getByText("String must contain at least 1 character(s)")
      ).toBeInTheDocument();

      expect(
        screen.getByText("Number must be greater than or equal to 1")
      ).toBeInTheDocument();
    });
  });
});
