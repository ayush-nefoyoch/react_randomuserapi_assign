import React, { useContext } from "react";
import { UserContext } from "../../context/user-context";
import { Link } from "react-router-dom";
import "./ShowDetails.css";

export const ShowDetails = () => {
  const userCtx = useContext(UserContext);
  const id = userCtx.id;
  console.log(userCtx.userDetails);
  return (
    <div>
      <div className="showDetails">
        <Link
          className="mynotes"
          style={{ textDecoration: "none", color: "white" }}
          to="/"
        >
          See All Users
        </Link>
      </div>
      <div className="main">
        <div className="imageBox">
          <img
            className="userImg"
            src={userCtx.userDetails[id].picture.large}
            alt="userImage"
          />
        </div>
        <div className="userName">
          <span>Name : </span>
          {`${userCtx.userDetails[id].name.first} ${userCtx.userDetails[id].name.last}`}
        </div>
        <div className="gender">
          <span>Gender : </span>
          {userCtx.userDetails[id].gender}
        </div>
        <div className="email">
          <span>Email Address : </span>
          {userCtx.userDetails[id].email}
        </div>
        <div className="location">
          <h4>Address : </h4>
          <span>{userCtx.userDetails[id].location.city}, </span>&nbsp;
          <span>{userCtx.userDetails[id].location.country}, </span>&nbsp;
          <span>{userCtx.userDetails[id].location.postcode}, </span>&nbsp;
          <span>{userCtx.userDetails[id].location.state}, </span>&nbsp;
          <span>{userCtx.userDetails[id].location.street.number}, </span>&nbsp;
          <span>{userCtx.userDetails[id].location.street.name}</span>
        </div>
        <div className="phoneNumber">
          <span>Phone Number : </span>
          {userCtx.userDetails[id].phone.replace(/-/g, "")}
        </div>
      </div>
    </div>
  );
};
