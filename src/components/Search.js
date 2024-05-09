import React, { useEffect, useState } from "react";

function Search(props) {
  const { transactions, setTransactions, originalTransactions } = props;
  const [search, setSearch] = useState("");

  const doSearch = (e) => {
    console.log(e.target.value.toLowerCase());
    let s = e.target.value.toLowerCase();
    console.log(s);
    setSearch(s);
    if (s.length < 4) {
      setTransactions(originalTransactions);

      return;
    }
    let filteredTransaction = [];
    for (let i = 0; i < transactions.length; i++) {
      console.log(transactions[i]);
      let trans = transactions[i];
      if (!trans.description) {
        continue;
      }
      if (!trans.category) {
        continue;
      }
      let description = trans.description.toLowerCase();
      let category = trans.category.toLowerCase();
      if (description.includes(s) || category.includes(s)) {
        filteredTransaction.push(trans);
      }
    }
    if (filteredTransaction.length > 0) {
      setTransactions(filteredTransaction);
      return;
    }
    setTransactions(originalTransactions);
  };

  return (
    <div className="ui large fluid icon input">
      <input
        type="text"
        placeholder="Search your Recent Transactions"
        onChange={(e) => {
          doSearch(e);
        }}
        value={search}
      />
      <i className="circular search link icon"></i>
    </div>
  );
}

export default Search;
