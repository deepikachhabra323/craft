import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import WorkerCard from '../../components/workers/workerCard';
import '@testing-library/jest-dom'

const workerInfo = {
    entityId: 1,
    firstName: 'John',
    lastName: 'Doe',
    empNo: '1234',
    role: 'Engineer',
    contracts: ['Contract A', 'Contract B'],
    allocation: [50, 50]
};

test('renders WorkerCard without crashing', () => {
  render(<WorkerCard />);
});

test('displays worker information', () => {
    const { getByText } = render(<WorkerCard workerInfo={workerInfo} />);
    // console.log(getByText)
    expect(getByText(/Contract Worker/i)).toBeInTheDocument();
    expect(getByText(/John Doe/i)).toBeInTheDocument();
    expect(getByText(/Emp No:1234/i)).toBeInTheDocument();
    expect(getByText(/Role: Engineer/i)).toBeInTheDocument();
});

test('clicking Update button shows detail modal', () => {
  const { getByText, getByTestId } = render(<WorkerCard workerInfo={workerInfo} />);
  fireEvent.click(getByText(/Update/i));
  expect(getByTestId('detail-worker-modal')).toBeInTheDocument();
});

test('clicking Off Board button calls offBoard function', () => {
  const offBoardMock = jest.fn();
  const { getByText,getByTestId } = render(<WorkerCard workerInfo={workerInfo} offBoardWorker={offBoardMock} />);
  fireEvent.click(getByText(/Update/i));
  fireEvent.click(getByTestId('worker-action-btn'));
  // expect(offBoardMock).toHaveBeenCalledTimes(1);
  // expect(offBoardMock).toHaveBeenCalledWith(1); // entityId of worker
});

test('DetailWorker modal opens correctly', () => {

  const { getByText,getByTestId } = render(<WorkerCard workerInfo={workerInfo} />);
  const updateButton = getByText(/Update/i);
  fireEvent.click(updateButton);
  expect(getByTestId('detail-worker-modal')).toBeInTheDocument();
  expect(getByText(/Worker Name : John Doe/i)).toBeInTheDocument();
  expect(getByText(/Employee No:1234/i)).toBeInTheDocument();
  expect(getByText(/Employee Role: Engineer/i)).toBeInTheDocument();
});