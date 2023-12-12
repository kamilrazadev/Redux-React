import React from "react";
import { useDispatch } from "react-redux";
import { deleteUsers } from "../store/slices/userSlice";

const DeleteUser = () => {
  const dispatch = useDispatch();

  const deleteAllUsers = () => {
    dispatch(deleteUsers());
  };

  return <button onClick={() => deleteAllUsers()}>Delete All</button>;
};

export default DeleteUser;
