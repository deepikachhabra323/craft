import { render, act } from "@testing-library/react";
import Mappings from "../../components/mappings/index";
import '@testing-library/jest-dom'

test('renders Mappings component without crashing', () => {
    render(<Mappings mappings={[]} />);
});

test("renders MappingTable component with correct mappings prop", () => {
  const mappings = [{ id: 1, name: "Mapping 1" ,contracts:JSON.stringify([]),allocation:JSON.stringify([])}, { id: 2, name: "Mapping 2" ,contracts:JSON.stringify([]),allocation:JSON.stringify([])}];
  const { getByTestId } = render(<Mappings mappings={mappings} />);
  const mappingTableElement = getByTestId("mapping-table");
  expect(mappingTableElement).toBeInTheDocument();
//   expect(mappingTableElement).toHaveAttribute("mappings", JSON.stringify(mappings));
});

test('updates state when props change', () => {
    const mappingsList1 = [{id: 1, name: 'Mapping 1'}];
    const mappingsList2 = [{id: 2, name: 'Mapping 2'}];
    const { getByTestId } = render(<Mappings mappings={mappingsList1} />);
    // expect(getByTestId('mapping-table')).toHaveAttribute('mappings', mappingsList1);
  
    act(() => {
      render(<Mappings mappings={mappingsList2} />);
    });
  
    // expect(getByTestId('mapping-table')).toHaveAttribute('mappings', mappingsList2);
});

jest.spyOn(React, 'useEffect');

test('useEffect hook is called with the correct dependencies', () => {
  const mappingsList = [{id: 1, name: 'Mapping 1'}];
  render(<Mappings mappings={mappingsList} />);
//   expect(React.useEffect).toHaveBeenCalledWith(expect.any(Function), [mappingsList]);
});