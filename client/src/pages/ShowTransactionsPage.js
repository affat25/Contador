import AddTransaction from "../components/AddTransaction";
import React, { useState, useEffect } from "react";
import TransactionPostCard from "../components/TransactionPostCard";
import LoadingSpinner from "../components/LoadingSpinner";
import ErrorAlert from "../components/ErrorAlert";
import { useParams } from "react-router-dom";

function ShowTransactionsPage() {
  const [transactions, setTransactions] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [rerender, setRerender] = useState(0);

  let params = useParams();

  useEffect(() => {
    async function getData() {
      setLoading(true);
      try {
        let response = await fetch("/api/transaction/" + params.id);
        let transactionsData = await response.json();

        setTransactions(transactionsData);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching /api/transaction/" + params.id, error);
        setError(true);
      }
    }

    getData();

    return () => {
      // clean up function
    };
  }, [params.id, rerender]);

  if (error) return <ErrorAlert details={"Transaction post with id=" + params.id + " not found"} />;
  if (loading) return <LoadingSpinner />;

  return (
    <>
      <div className="container mt-2 mb-2 float-left">
        <AddTransaction rerenderFN={() => setRerender(rerender + 1)} />
      <div className="row justify-content-center">
        {transactions.map((entryData) => (
          <TransactionPostCard {...entryData} key={entryData.id} />
        ))}
      </div>
      </div>
    </>
  );
}

export default ShowTransactionsPage;
// ShowTransactionsPage
