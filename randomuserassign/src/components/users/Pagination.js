import React from "react";
import { useState } from "react/cjs/react.development";
import Buttons from "../Layout/Button";
import DropDown from "../Layout/DropDown";
import "./Table.css";
import { Table } from "./Table";

export const Pagination = (props) => {

  const [currentPage, setCurrentPage] = useState(1);
  const [limit, setLimit] = useState(5);

  const handleChange = (e) => {
    setLimit(e.target.value);
    setCurrentPage(1);
  };

  const firstPageFunc = () => {
    if (currentPage > 1) {
      setCurrentPage(1);
    }
  };

  const prevPageFunc = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const nextPageFunc = () => {
    if (currentPage < props.data.length / limit) {
      setCurrentPage(currentPage + 1);
    }
  };
  const lastPageFunc = () => {
    setCurrentPage(props.data.length / limit);
  };

  let filteredArray = props.data;
  let start = (currentPage - 1) * limit;
  let end = parseInt(start) + parseInt(limit);
  filteredArray = filteredArray.slice(start, end);
  return (
    <div>
      <Table filteredArray={filteredArray} />
      <DropDown dropDown={handleChange} />
      <section>
        <Buttons text="first" onClick={firstPageFunc} />
        <Buttons text="prev" onClick={prevPageFunc} />
        <Buttons text={currentPage} />
        <Buttons text="next" onClick={nextPageFunc} />
        <Buttons text="last" onClick={lastPageFunc} />
      </section>
    </div>
  );
};
