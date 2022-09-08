import React from "react";
import Link from "next/link";
import Router from "next/router";

export default function ButtonToHome() {
  return (
    <div
      className="p-2 m-2 bg-gray-400"
      onClick={() => {
        Router.push("/");
      }}
    >
      ButtonToHome
    </div>
  );
}
