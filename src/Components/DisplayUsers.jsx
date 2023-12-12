import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeUser } from "../store/slices/userSlice";

const DisplayUsers = () => {
  const dispatch = useDispatch();

  const data = useSelector((state) => {
    return state.users;
  });

  const removeSingleUser = (key) => {
    dispatch(removeUser(key));
  };

  return (
    <div>
      {data.map((user, key) => (
        <li key={key}>
          <span>{user}</span>
          <button onClick={() => removeSingleUser(key)}>Delete</button>
        </li>
      ))}
    </div>
  );
};

export default DisplayUsers;
