import React from "react";
import DeleteUser from "./DeleteUser";
import { fakeUserData } from "../api";
                                                                                                                                                                       
const UserDetails = () => {
  const addNewUser = (payload) => {
    console.log(payload);
  };

  return (
    <div className="content">
      <div className="admin-table d-flex">
        <div className="admin-subtitle">List of User Details</div>
        <button onClick={() => addNewUser(fakeUserData())}>Add New User</button>
      </div>
      <ul>
        {/* <li>Hi</li>
        <li>Hii</li> */}
      </ul>
      <hr />
      <DeleteUser />
    </div>
  );
};

export default UserDetails;
