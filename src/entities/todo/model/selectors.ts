import { RootState } from "@app/store";

export const selectTodos = (state: RootState) => state.todos.todos;
export const selectFilter = (state: RootState) => state.todos.filter;
export const selectLoading = (state: RootState) => state.todos.loading;

export const selectFilteredTodos = (state: RootState) => {
  const todos = selectTodos(state);
  const filter = selectFilter(state);

  switch (filter) {
    case "active":
      return todos.filter((todo) => !todo.completed);
    case "completed":
      return todos.filter((todo) => todo.completed);
    default:
      return todos;
  }
};
