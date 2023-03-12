import React from 'react';


const ContractWorker = ({ firstName, lastName, role, startDate, employeeNumber, serviceContracts=['a','b','c'],
//  onBoardWorker,
  offBoardWorker, changeContractMapping, moveWorker }) => {
  const serviceContractOptions = serviceContracts.map(contract => {
    return <option value={contract.id}>{contract.name}</option>
  })

  const changeContractMapping = (contract)=>{
    //update contracts for a worker
  }

  const onBoardWorker = ()=>{
    //update worker in db
  }

  return (
    <div>
      <h2>{firstName} {lastName}</h2>
      <p>Role: {role}</p>
      <p>Start Date: {startDate}</p>
      <p>Employee Number: {employeeNumber}</p>
      <select onChange={(event) => changeContractMapping(event.target.value)}>
        <option value="">Select Service Contract</option>
        {serviceContractOptions}
      </select>
      <button onClick={onBoardWorker}>Onboard</button>
      {/* <button onClick={offBoardWorker}>Offboard</button>
      <button onClick={moveWorker}>Move Worker</button> */}
    </div>
  );
}

export default ContractWorker;
