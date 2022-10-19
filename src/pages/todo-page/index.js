import React, { useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";

import {
  PlusButton,
  SubmitModal,
  TodoCard,
  LogoutButton,
} from "../../components";

import { getTodoListAPI } from "../../api/todo";

import { MainContainer } from "../auth-page/styles";
import { MotionBox, TodoListContainer } from "./styles";

function TodoPage() {
  const parents = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.5,
      },
    },
  };

  const child = {
    hidden: {
      opacity: 0,
      y: 30,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  const navigate = useNavigate();
  const [todoList, setTodoList] = useState();
  const [token, setToken] = useState(localStorage.getItem("token"));

  const addTodoItem = (todo) => {
    setTodoList([...todoList, todo]);
  };

  const deleteTodoItem = (todoId) => {
    setTodoList(
      todoList.filter((item) => {
        return item.id !== todoId;
      })
    );
  };

  const updateTodoItem = (updateTodo) => {
    setTodoList(
      todoList.map((item) => {
        if (item.id === updateTodo?.id) {
          return {
            id: updateTodo?.id,
            todo: updateTodo?.todo,
            userId: updateTodo?.userId,
          };
        } else {
          return item;
        }
      })
    );
  };

  const getTodoList = (value) => {
    setTodoList(value);
  };

  useEffect(() => {
    getTodoListAPI(getTodoList);
  }, []);

  useEffect(() => {
    if (token === null) {
      navigate("/");
    }
  }, [token]);

  return (
    <MainContainer>
      <PlusButton />
      <LogoutButton setToken={setToken} />
      <SubmitModal addTodoItem={addTodoItem} />
      {todoList && (
        <TodoListContainer variants={parents} initial="hidden" animate="show">
          {todoList.map((item) => {
            return (
              <>
                <MotionBox variants={child}>
                  <TodoCard
                    key={item.id}
                    todoItem={item}
                    deleteTodoItem={deleteTodoItem}
                    updateTodoItem={updateTodoItem}
                  />
                </MotionBox>
              </>
            );
          })}
        </TodoListContainer>
      )}
    </MainContainer>
  );
}

export default TodoPage;
