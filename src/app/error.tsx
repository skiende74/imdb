"use client";
import React from "react";
import { useEffect } from "react";

type Props = { error: any; reset: any };

const Error = ({ error, reset }: Props) => {
  useEffect(() => {
    console.log(error);
  }, [error]);
  return (
    <div className="text-center mt-10 space-y-2">
      <h1>Something went wrong</h1>
      <button onClick={reset} className="hover:text-amber-600 ">
        Try Again
      </button>
    </div>
  );
};

export default Error;
