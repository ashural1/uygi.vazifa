import React from "react";
import useCollection from "../hooks/useCollection";
import useGlobalContext from "../hooks/useGlobalContext";
import { Link } from "react-router-dom";
function BooksGrid() {
  let { data } = useCollection();

  return (
    <>
      {!data && (
        <h3 className="text-center mb-10 mt-5 font-bold">
          Loading ...{" "}
          <span className="loading loading-spinner loading-md "></span>
        </h3>
      )}
  
    </>
  );
}

export default BooksGrid;
