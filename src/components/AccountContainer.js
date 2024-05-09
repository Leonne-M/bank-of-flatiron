import React, { useState, useEffect } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

function AccountContainer() {
  const [transactions, setTransactions] = useState([]);
  const [originalTransactions, setOriginalTransactions] = useState([]);
  const getTransactions = () => {
    const requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch("http://localhost:3000/transactions", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        setTransactions(result);
        setOriginalTransactions(result);
      })
      .catch((error) => console.error(error));
  };
  useEffect(() => {
    getTransactions();
  }, []);

  return (
    <div>
      <Search
        transactions={transactions}
        setTransactions={setTransactions}
        originalTransactions={originalTransactions}
      />
      <AddTransactionForm
        transactions={transactions}
        setTransactions={setTransactions}
        getTransactions={getTransactions}
      />
      <TransactionsList
        transactions={transactions}
        setTransactions={setTransactions}
      />
    </div>
  );
}

export default AccountContainer;
