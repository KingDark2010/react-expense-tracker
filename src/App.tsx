import React from 'react';
import './App.scss';
import ExpenseCard from './App/Components/Expanses/Expense-card.component';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ExpenseCard></ExpenseCard>
      </header>
    </div>
  );
}

export default App;
