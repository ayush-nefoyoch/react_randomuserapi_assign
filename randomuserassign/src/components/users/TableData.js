import React, { useContext, useEffect } from "react";
import { UserContext } from "../../context/user-context";
import { Pagination } from "./Pagination";

export const TableData = () => {
  const userCtx = useContext(UserContext);

  useEffect(() => {
    userCtx.getAPIData();
  }, []);

  return (
    <div>
      {userCtx.userDetails && userCtx.userDetails.length > 0 && (
        <Pagination data={userCtx.userDetails} />
      )}
    </div>
  );
};
