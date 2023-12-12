import React from "react";
import DeleteUser from "./DeleteUser";
import { fakeUserData } from "../api";
import { useDispatch } from "react-redux";
import { addUser } from "../store/slices/userSlice";
import DisplayUsers from "./DisplayUsers";

const UserDetails = () => {
  const dispatch = useDispatch();

  const addNewUser = (payload) => {
    dispatch(addUser(payload));
  };

  return (
    <div className="content">
      <div className="admin-table d-flex">
        <div className="admin-subtitle">List of User Details</div>
        <button onClick={() => addNewUser(fakeUserData())}>Add New User</button>
      </div>
      <ul>
        <DisplayUsers />
      </ul>
      <hr />
      <DeleteUser />
    </div>
  );
};

export default UserDetails;
