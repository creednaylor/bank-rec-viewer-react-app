import './App.css';
import { useState } from 'react';
import { initialBankTransactionsArray } from './data/sampleData'

function App() {

  const [bankTransactionsArray, setBankTransactionsArray] = useState(initialBankTransactionsArray);

  const toggleClass = (event) => {
    let clickedElement = event.target.parentNode;

    if (clickedElement.classList.contains('highlighted')) {
      clickedElement.classList.remove('highlighted');
    }
    else {
      clickedElement.classList.add('highlighted');
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        Bank Reconciliation
      </header>
      <div className="css-table">
        <div className="css-table-header">
          {
            bankTransactionsArray[0].map((bankTransactionsColumnHeader, bankTransactionsColumnHeaderIndex) => {
              return (
                <div key={"bankTransactionsColumnHeader" + bankTransactionsColumnHeaderIndex}>{bankTransactionsColumnHeader}</div>
              );
            })
          }
        </div>
        <div className="css-table-body">
          {
            bankTransactionsArray.slice(1).map((bankTransaction, bankTransactionIndex) => {
              return (
                <div className="css-table-row" onClick={toggleClass} key={"bankTransactionIndex" + bankTransactionIndex}>
                  {
                    bankTransaction.map((bankTransactionColumnValue, bankTransactionColumnValueIndex) => {
                      return (
                        <div key={"bankTransactionColumnValueIndex" + bankTransactionColumnValueIndex}>{bankTransactionColumnValue}</div>
                      );
                    })
                  }
                </div>
              );
            })
          }
        </div>
      </div>
    </div>
  );
}

export default App;
