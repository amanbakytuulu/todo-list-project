import { createAsyncThunk } from "@reduxjs/toolkit";
import { TODOS_KEY } from "@shared/config";
import { Todo } from "./types";
import { toast } from "react-toastify";
import { errorMessage } from "@shared/lib/error-message";

const sleep = (delay: number = 1000) =>
  new Promise((resolve) => {
    setTimeout(resolve, delay);
  });

export const getTodosFromStorage = (): Todo[] => {
  try {
    const todos = localStorage.getItem(TODOS_KEY);
    return todos ? JSON.parse(todos) : [];
  } catch (error) {
    console.error("Ошибка при загрузке", error);
    return [];
  }
};

export const saveTodosToStorage = (todos: Todo[]): void => {
  try {
    localStorage.setItem(TODOS_KEY, JSON.stringify(todos));
  } catch (error) {
    console.error("Failed to save todos:", error);
  }
};

export const fetchTodos = createAsyncThunk(
  "todos/fetchTodos",
  async (_, { rejectWithValue }) => {
    try {
      await sleep();
      const response = getTodosFromStorage();

      return response;
    } catch (err) {
      toast.error(errorMessage(err));
      return rejectWithValue(errorMessage(err));
    }
  }
);

export const addTodo = createAsyncThunk(
  "todos/addTodo",
  async (text: string, { rejectWithValue }) => {
    try {
      const newTodo: Todo = {
        id: Date.now().toString(),
        text,
        completed: false,
        createdAt: new Date().toISOString(),
      };
      await sleep();

      return newTodo;
    } catch (err) {
      toast.error(errorMessage(err));
      return rejectWithValue(errorMessage(err));
    }
  }
);

export const toggleTodo = createAsyncThunk(
  "todos/toggleTodo",
  async (id: string, { rejectWithValue }) => {
    try {
      await sleep();

      return id;
    } catch (err) {
      toast.error(errorMessage(err));
      return rejectWithValue(errorMessage(err));
    }
  }
);

export const removeTodo = createAsyncThunk(
  "todos/removeTodo",
  async (id: string, { rejectWithValue }) => {
    try {
      await sleep();

      return id;
    } catch (err) {
      toast.error(errorMessage(err));
      return rejectWithValue(errorMessage(err));
    }
  }
);
