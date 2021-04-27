import Expenses from "./components/expenses/Expenses";
import { useState } from "react";
import NewExpense from "./components/newExpenses/NewExpense";

const expenseList = [];

const App = () => {
  const [expenses, setExpenses] = useState(expenseList);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
