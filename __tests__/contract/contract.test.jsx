import { render, fireEvent } from '@testing-library/react';
import Contracts from '../../components/contracts/index';

test('renders Contracts component without crashing', () => {
  render(<Contracts contracts={[]} />);
});

test('performs a search when the Search component triggers it', () => {
    const performSearch = jest.fn();
    const { getByTestId } = render(<Contracts contracts={[]} />);
    const searchInput = getByTestId('search-input');
    fireEvent.change(searchInput, { target: { value: 'search term' } });

    fireEvent.click(getByTestId('search-button'));
    // expect(performSearch).toHaveBeenCalledTimes(1);
});
  
test('renders the correct number of ContractCard components', () => {
    const contracts = [
    { entityId: 1, name: 'Contract 1' },
    { entityId: 2, name: 'Contract 2' },
    { entityId: 3, name: 'Contract 3' },
    ];
    const { getAllByTestId } = render(<Contracts contracts={contracts} />);
    const contractCards = getAllByTestId('contract-card');
    expect(contractCards).toHaveLength(contracts.length);
});