import React from "react";
import DeleteUser from "./DeleteUser";

const UserDetails = () => {
  return (
    <div className="content">
      <div className="admin-table">
        <div className="admin-subtitle">List of User Details</div>
        <button>Add New User</button>
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
