import React, { useState }  from "react";

import './Expences.css';
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";


function Expences(props){
  const [filteredYear, setFilteredYear] = useState(2019);

  const filterChangeHandler = selectedYear => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.items.filter(expense => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

    return(
      <div>
        <Card className="expenses">
          <ExpensesFilter 
            selected ={filteredYear} 
            onFilterChangeHandler={filterChangeHandler} 
          />
          <ExpensesChart expense={filteredExpenses}/>
          <ExpensesList items={filteredExpenses}/>
        </Card>
      </div>

    )
}
export default Expences;