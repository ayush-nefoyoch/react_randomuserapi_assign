import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../context/user-context";
import { LightImageBox } from "../Layout/LightImageBox";
import "./Table.css";
export const Table = (props) => {
  const userCtx = useContext(UserContext);

  const onItemClicked = (index) => {
    userCtx.getId(index);
  };
  const id = userCtx.id;

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
          {props.filteredArray.map((data, index) => (
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
    </div>
  );
};
