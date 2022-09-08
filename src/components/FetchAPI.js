import React from "react";
import { useState, useEffect } from "react";

export default function FetchAPI() {
  const [fetchData, setFetchData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const fetchApi = () => {
    setIsLoading(true);
    fetch("https://reqres.in/api/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: "morpheus",
        job: "leader",
      }),
    })
      .then((res) => {
        setIsLoading(false);
        return res.json();
      })
      .then((data) => {
        setFetchData({ ...data });
      });
  };

  useEffect(() => {
    fetchApi();
  }, []);

  return (
    <div>
      <h1 className="text-3xl">Belajar Fetch API, toast, dan fluently useEffect</h1>
      <div role="status"></div>
      <button
        className="p-2 bg-white"
        onClick={() => {
          fetchApi();
        }}
      >
        {isLoading ? "Loading..." : "Fetch API"}
      </button>
      {isLoading ? (
        <h1>text loading ...</h1>
      ) : (
        <h1>
          {fetchData.name} {fetchData.job} {fetchData.id} {fetchData.createdAt}
        </h1>
      )}
    </div>
  );
}
