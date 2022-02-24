import React, { useState }  from "react";

import ExpenseItem from "./ExpenseItem";
import './Expences.css';
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";


function Expences(props){
  const [filteredYear, setFilteredYear] = useState(2020);

  const filterChangeHandler = selectedYear => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.items.filter(expense => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

    return(
      <div>
        <Card className="expenses">
          <ExpensesFilter selected ={filteredYear} onFilterChangeHandler={filterChangeHandler} />.
          {filteredExpenses.length === 0 ? (
          <p>No expenses found.</p>
           ) : ( 
            filteredExpenses.map((expense) => (
            <ExpenseItem  
              key={expense.id}
              title={expense.title} 
              amount={expense.amount} 
              date={expense.date}
              />
            ))
           )} 
        </Card>
      </div>

    )
}
export default Expences;