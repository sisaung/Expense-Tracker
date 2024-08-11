import { useState } from "react";
import Container from "./components/Container";
import ExpenseList from "./components/ExpenseList";
import listExpenses from "./data/Expenses";
import ExpenseFilter from "./components/ExpenseFilter";
import ExpenseForm from "./components/ExpenseForm";
import Header from "./components/Header";

const App = () => {
  const [expenses, setExpenses] = useState(listExpenses);
  const [selectedCategory, setSelectedCategory] = useState("");

  const handleDelete = (id: number) => {
    setExpenses(expenses.filter((e) => e.id !== id));
  };

  const handleSelect = (e: string) => {
    setSelectedCategory(e);
  };

  const visibleFilterExpenses = selectedCategory
    ? expenses.filter((expense) => expense.category === selectedCategory)
    : expenses;

  return (
    <Container>
      <Header />
      <ExpenseForm
        onSubmit={(data) =>
          setExpenses([...expenses, { ...data, id: expenses.length + 1 }])
        }
      />
      <ExpenseFilter onSelect={handleSelect} />

      {expenses.length > 0 && (
        <ExpenseList
          expenses={visibleFilterExpenses}
          onDeleteExpense={handleDelete}
        />
      )}
    </Container>
  );
};

export default App;
