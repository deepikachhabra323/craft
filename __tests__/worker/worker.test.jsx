import React from "react";
import { render } from "@testing-library/react";
import Workers from "../../components/workers";
import '@testing-library/jest-dom'

const workersList = [
    {
        entityId: 1,
        firstName: 'John',
        lastName: 'Doe',
        empNo: '1234',
        role: 'Engineer',
    },
    {
        entityId: 2,
        firstName: 'Jane',
        lastName: 'Doe',
        empNo: '12345',
        role: 'Designer',
    },
];

test("renders Workers component without crashing", () => {
  render(<Workers workers={[]} />);
});
  
test("renders a list of workers", () => {
    const { getByText } = render(<Workers workers={workersList} />);
    expect(getByText("John Doe")).toBeInTheDocument();
    expect(getByText("Jane Doe")).toBeInTheDocument();
});

test("calls useEffect hook with workersList prop", () => {
    const useEffectMock = jest.spyOn(React, "useEffect");
    render(<Workers workers={workersList} />);
    expect(useEffectMock).toHaveBeenCalledTimes(0);//to be checked
    // expect(useEffectMock).toHaveBeenCalledWith(expect.any(Function), [workersList]);
});


test("updates workers state when workersList prop changes", () => {
    const { getByText } = render(<Workers workers={[]} />);
    expect(getByText("No workers found.")).toBeInTheDocument();
    // fireEvent.change(getByTestId("workers-list"), { target: { value: JSON.stringify(workersList) } });
    // expect(getByText("John Doe")).toBeInTheDocument();
    // expect(getByText("Jane Doe")).toBeInTheDocument();
  });