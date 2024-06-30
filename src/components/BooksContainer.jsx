import useCollection from "../hooks/useCollection";
import BooksGrid from "./BooksGrid";
import BooksList from "./BooksList";
import React, { useState } from "react";
import { HiViewGrid, HiViewList } from "react-icons/hi";
function BooksContainer() {
  let [grid, setGrid] = useState("grid");
  let activeGrid = () => {
    return grid == "grid" ? "bg-accent" : "bg-red";
  };
  let activeList = () => {
    return grid == "grid" ? " bg-red" : "bg-accent";
  };
  let { data } = useCollection();

  return (
    <>
  
      <hr />
      {grid == "grid" ? <BooksGrid /> : <BooksList />}
    </>
  );
}

export default BooksContainer;
