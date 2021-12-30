import React, { useContext } from "react";
import { useState } from "react/cjs/react.development";
import { UserContext } from "../../context/user-context";
import Buttons from "../Layout/Button";
import DropDown from "../Layout/DropDown";
import { Link } from "react-router-dom";
import { LightImageBox } from "../Layout/LightImageBox";
import "./Table.css";
export const Pagination = (props) => {
  const userCtx = useContext(UserContext);

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

  const onItemClicked = (index) => {
    userCtx.getId(index);
  };
  const id = userCtx.id;

  let filteredArray = props.data;
  let start = (currentPage - 1) * limit;
  let end = parseInt(start) + parseInt(limit);
  filteredArray = filteredArray.slice(start, end);
  return (
    <div>
      <div id="resp-table">
        <div id="resp-table-header">
          <div className="table-header-cell">UserName</div>
          <div className=" table-header-cell">Full Name</div>
          <div className="table-header-cell">Email</div>
          <div className="table-header-cell">DOB</div>
          <div className="table-header-cell">Address</div>
          <div className="table-header-cell">Phone Number</div>
          <div className="table-header-cell">Picture</div>
        </div>
        <div id="resp-table-body">
          {filteredArray.map((data, index) => (
            <div className="resp-table-row" key={index}>
              <div
                className="table-body-cell username"
                role="button"
                onClick={() => {
                  onItemClicked(index);
                }}
              >
                {data.name.first}
                <div className="myDetails">
                  {index >= 0 && index === id && (
                    <Link
                      to="/userprofile"
                      style={{
                        textDecoration: "none",
                        color: "red",
                        fontSize: "19px",
                      }}
                    >
                      My Details
                    </Link>
                  )}
                </div>
              </div>
              <div className="table-body-cell">{`${data.name.first} ${data.name.last}`}</div>
              <div className="table-body-cell">{data.email}</div>
              <div className="table-body-cell">
                {new Date(data.dob.date).toLocaleDateString("en-GB")}
              </div>
              <div className="table-body-cell">{data.location.city}</div>
              <div className="table-body-cell">
                {data.phone.replace(/-/g, "")}
              </div>
              <div className="table-body-cell">
                <LightImageBox
                  userImg={data.picture.large}
                  thumbnail={data.picture.thumbnail}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
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
