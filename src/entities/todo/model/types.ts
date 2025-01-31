export interface Todo {
  id: string;
  text: string;
  completed: boolean;
  createdAt: string;
}

export type TodoFilter = "all" | "active" | "completed";
