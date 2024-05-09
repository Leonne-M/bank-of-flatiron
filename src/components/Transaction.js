import React, { useEffect } from "react";

function Transaction(props) {
  const { date, description, category, amount, id } = props;
  const remove = () => {
    const requestOptions = {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    };

    fetch(`http://localhost:3000/transactions/${id}`, requestOptions)
      .then((response) => response.json())
      .then((result) => console.log(result))
      .catch((error) => console.error(error));
  };
  return (
    <tr>
      <td>{date}</td>
      <td>{description}</td>
      <td>{category}</td>
      <td>{amount}</td>
      <td>
        <button onClick={remove}>X</button>
      </td>
    </tr>
  );
}

export default Transaction;
