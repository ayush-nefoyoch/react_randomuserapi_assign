import React, { useContext, useEffect } from "react";
import { UserContext } from "../../context/user-context";
// import { UserContext } from "./context/user-context";
import "../../components/users/Table.css";

export const Table = () => {
  const userCtx = useContext(UserContext);
  useEffect(() => {
    userCtx.getAPIData();
  }, []);

  return (
    <div>
      <div id="resp-table">
        <div id="resp-table-header">
          <div className="table-header-cell">UserName</div>
          <div className=" table-header-cell">Full Name</div>
          <div className="table-header-cell">Email</div>
          <div className="table-header-cell">DOB</div>
          <div className="table-header-cell">Address</div>
          <div className="table-header-cell">Picture</div>
        </div>
        <div id="resp-table-body">
          {/* {userCtx.userDetails && userCtx.userDetails[0] && userCtx.userDetails[0].gender} */}
          {userCtx.userDetails &&
            userCtx.userDetails.length > 0 &&
            userCtx.userDetails.map((data, index) => (
              <div className="resp-table-row" key={index}>
                <div className="table-body-cell">{data.name.title}</div>
                <div className="table-body-cell">{`${data.name.first} ${data.name.last}`}</div>
                <div className="table-body-cell">{data.email}</div>
                <div className="table-body-cell">{data.dob.date}</div>
                <div className="table-body-cell">{data.location.city}</div>
                <div className="table-body-cell">
                  <img src={data.picture.medium} alt="userImage"/>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};
