import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { ApiConstants } from "../api/ApiConstants";
import custom_axios from "../axios/AxiosSetup";
import { toast } from "react-toastify";

interface TodoModel {
  title: string;
  date: string;
  id: number;
}

export const UserDetail = () => {
  const [todos, setTodos] = React.useState<TodoModel[]>([]);

  const { state } = useLocation();
  // console.log("🚀 ~ file: UserDetail.tsx:18 ~ UserDetail ~ state:", state);
  const { id, firstName, lastName, email } = state;
  console.log("🚀 ~ file: UserDetail.tsx:13 ~ UserDetail ~ id:", id);

  const getAllNotCompletedTodos = async () => {
    const userId = id;
    if (userId != null) {
      const response = await custom_axios.get(
        ApiConstants.TODO.FIND_NOT_COMPLETED(userId),
        {
          headers: { Authorization: "Bearer " + localStorage.getItem("token") },
        }
      );
      console.log(
        "🚀 ~ file: UserDetail.tsx:32 ~ getAllNotCompletedTodos ~ response:",
        response
      );
      setTodos(response.data);
    } else {
      toast.info("Sorry you are not authenticated");
    }
  };
  React.useEffect(() => {
    if (todos.length === 0) getAllNotCompletedTodos();
  }, []);

  return (
    <>
      <div
        className="p-4 border rounded shadow"
        onLoad={getAllNotCompletedTodos}
      >
        <p className="text-lg font-semibold"> USER ID: {id}</p>
        <p>First Name: {firstName}</p>
        <p>Last Name: {lastName}</p>
        <p>Email: {email}</p>

        <div className="mt-4">Todos Count: {todos.length}</div>
        {todos.map((item) => (
          <div key={item.id} className="mt-2">
            <ul className="list-disc pl-4">
              {/* <li>Todo ID: {item.id}</li> */}
              <li>{item.title}</li>
              <li>{item.date}</li>
            </ul>
          </div>
        ))}
      </div>
    </>
  );
};
