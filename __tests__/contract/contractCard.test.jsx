import { render, fireEvent } from '@testing-library/react';
import ContractCard from '../../components/contracts/contractCard';
import '@testing-library/jest-dom';

test('renders ContractCard component without crashing', () => {
  render(<ContractCard />);
});

test('displays the correct contract name', () => {
  const contractInfo = { name: 'Test Contract' };
  const { getByText } = render(<ContractCard contractInfo={contractInfo} />);
  expect(getByText('Test Contract')).toBeInTheDocument();
});

test('displays the correct contract status', () => {
  const contractInfo = { status: 'approved' };
  const { getByLabelText } = render(<ContractCard contractInfo={contractInfo} />);
  expect(getByLabelText('Status')).toHaveTextContent('Approved');
});

// test('updates the contract status when the "Update Status" button is clicked', () => {
//   const contractInfo = { entityId: 'test-id' };
//   const mockFetch = jest.fn();
//   global.fetch = mockFetch.mockResolvedValue({});

//   const { getByText, getByTestId } = render(<ContractCard contractInfo={contractInfo} />);
//   const contentInput = getByTestId("select-input");
//   fireEvent.change(contentInput, {
//     target: { value: "new content" }
//   });
//   fireEvent.click(getByText('Update Status'));

//   expect(mockFetch).toHaveBeenCalledWith("/api/mapping/searchContracts?q=test-id");
//   expect(mockFetch).toHaveBeenCalledWith("/api/contract/updateContractStatus", {"body": "{\"eid\":\"test-id\",\"status\":\"\"}", "method": "POST"});
// });

// test('displays the list of employees associated with the contract', async () => {
//   const contractInfo = { entityId: 'test-id' };
  
//   const mockFetch = jest.fn();
//   mockFetch.mockResolvedValue(() => {
//     promise = new Promise((resolve, reject) => {
//       resolve({
//           contracts: [
//             {
//               contracts: JSON.stringify(['test-id', 'other-id']),
//               emp: 'Employee A',
//               allocation: JSON.stringify([50, 50])
//             },
//             {
//               contracts: JSON.stringify(['test-id']),
//               emp: 'Employee B',
//               allocation: JSON.stringify([100])
//             }
//           ]
//       });
//     });

//     return promise;
//   });
//   global.fetch = mockFetch;

//   const { findByText } = render(<ContractCard contractInfo={contractInfo} />);
//   // expect(await findByText('Employee A')).toBeInTheDocument();
//   // expect(await findByText('50')).toBeInTheDocument();
//   // expect(await findByText('Employee B')).toBeInTheDocument();
//   // expect(await findByText('100')).toBeInTheDocument();
// });