import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Todo, TodoFilter } from "./types";
import {
  addTodo,
  fetchTodos,
  removeTodo,
  saveTodosToStorage,
  toggleTodo,
} from "./actions";

const getFilterFromUrl = () => {
  const searchParams = new URLSearchParams(window.location.search);
  const filter = searchParams.get("filter") as TodoFilter;
  return filter ?? "all";
};

interface TodoState {
  loading: boolean;
  error?: string | null;
  todos: Todo[];
  filter: TodoFilter;
}

const initialState: TodoState = {
  loading: false,
  error: null,
  todos: [],
  filter: getFilterFromUrl(),
};

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    // addTodo: (state, action: PayloadAction<string>) => {
    //   state.todos.push({
    //     id: Date.now().toString(),
    //     text: action.payload,
    //     completed: false,
    //     createdAt: new Date().toISOString(),
    //   });
    // },
    // toggleTodo: (state, action: PayloadAction<string>) => {
    //   const todo = state.todos.find((todo) => todo.id === action.payload);
    //   if (todo) {
    //     todo.completed = !todo.completed;
    //   }
    // },
    // removeTodo: (state, action: PayloadAction<string>) => {
    //   state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    // },
    setFilter: (state, action: PayloadAction<TodoFilter>) => {
      state.filter = action.payload;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchTodos.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchTodos.fulfilled, (state, action) => {
        state.todos = action.payload;
        state.loading = false;
      })
      .addCase(fetchTodos.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });

    // Add todo
    builder
      .addCase(addTodo.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addTodo.fulfilled, (state, action) => {
        state.loading = false;
        state.todos.push(action.payload);
        saveTodosToStorage(state.todos);
      })
      .addCase(addTodo.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });

    // Toggle todo
    builder
      .addCase(toggleTodo.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(toggleTodo.fulfilled, (state, action) => {
        state.loading = false;
        const todo = state.todos.find((todo) => todo.id === action.payload);
        if (todo) {
          todo.completed = !todo.completed;
        }
        saveTodosToStorage(state.todos);
      })
      .addCase(toggleTodo.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });

    // Remove todo
    builder
      .addCase(removeTodo.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(removeTodo.fulfilled, (state, action) => {
        state.loading = false;
        state.todos = state.todos.filter((todo) => todo.id !== action.payload);
        saveTodosToStorage(state.todos);
      })
      .addCase(removeTodo.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

// export const { addTodo, toggleTodo, removeTodo, setFilter } = todoSlice.actions;
export const { setFilter } = todoSlice.actions;
export const todoReducer = todoSlice.reducer;
