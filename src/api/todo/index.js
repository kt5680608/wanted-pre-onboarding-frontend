const BASE_URL = process.env.REACT_APP_BASE_URL;

export const addTodoAPI = (todo, addTodoItem) => {
  fetch(`${BASE_URL}/todos`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",

      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
    body: JSON.stringify({
      todo: todo,
    }),
  })
    .then((response) => response.json())
    .then((data) => {
      addTodoItem(data);
    });
};

export const deleteTodoAPI = (id, deleteTodoItem) => {
  fetch(`${BASE_URL}/todos/${id}`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  }).then((data) => {
    if (data.status === 204) {
      deleteTodoItem(id);
    }
  });
};

export const updateTodoAPI = (todo, updateTodoItem) => {
  fetch(`${BASE_URL}/todos/${todo.id}`, {
    method: "PUT",
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      todo: todo.todo,
      isCompleted: todo.isCompleted,
    }),
  })
    .then((response) => response.json())
    .then((data) => {
      updateTodoItem(data);
    });
};

export const getTodoListAPI = (getTodoList) => {
  const BASE_URL = process.env.REACT_APP_BASE_URL;
  fetch(`${BASE_URL}/todos`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  })
    .then((response) => response.json())
    .then((data) => {
      getTodoList(data);
    });
};
