/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import Router from "next/router";
import { query } from "firebase/firestore";

export default function DynamicRoute() {
  return (
    <div>
      <h1 className="text-3xl ">DynamicRoute</h1>
      <button
        className="p-2 m-2 bg-white"
        onClick={() => {
          Router.push({
            pathname: "/test/home",
          });
        }}
      >
        Buat ngepush
      </button>
    </div>
  );
}
