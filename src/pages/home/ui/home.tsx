import React from "react";
import { CheckSquare } from "lucide-react";
import { AddTodoForm } from "@features/add-todo";
import { FilterTodos } from "@features/filter-todos";
import { TodoList } from "@widgets/todo-list";

export const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-2xl mx-auto px-4">
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <div className="flex items-center justify-center space-x-2 mb-8">
            <CheckSquare size={32} className="text-purple-600" />
            <h1 className="text-3xl font-bold text-gray-800">Список задач</h1>
          </div>
          <AddTodoForm />
          <FilterTodos />
          <TodoList />
        </div>
      </div>
    </div>
  );
};
