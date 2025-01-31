import React, { useState } from "react";
import { Check, Trash2 } from "lucide-react";
import cn from "classnames";
import { Button } from "@shared/ui/button";
import { type Todo, toggleTodo, removeTodo } from "@entities/todo";
import { useAppDispatch } from "@shared/lib/hooks/use-app-dispatch";

interface TodoItemProps {
  todo: Todo;
}

export const TodoItem: React.FC<TodoItemProps> = ({ todo }) => {
  const dispatch = useAppDispatch();
  const [loading, setLoading] = useState(false);

  const onToggle = () => {
    setLoading(true);
    dispatch(toggleTodo(todo.id)).then(() => {
      setLoading(false);
    });
  };

  const onRemove = () => {
    setLoading(true);
    dispatch(removeTodo(todo.id)).then(() => {
      setLoading(false);
    });
  };

  const wrapperCN = cn(
    "flex items-center justify-between p-4 bg-white rounded-lg shadow-sm mb-2 transition-all hover:shadow-md",
    { "opacity-60 pointer-events-none": loading }
  );

  return (
    <div className={wrapperCN}>
      <div className="flex items-center space-x-4">
        <button
          onClick={onToggle}
          className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-colors ${
            todo.completed
              ? "bg-purple-600 border-purple-600"
              : "border-gray-300 hover:border-purple-600"
          }`}
        >
          {todo.completed && <Check size={14} className="text-white" />}
        </button>
        <span
          className={`text-gray-800 pr-2 ${
            todo.completed ? "line-through text-gray-400" : ""
          }`}
        >
          {todo.text}
        </span>
      </div>
      <Button variant="icon" onClick={onRemove}>
        <Trash2 size={18} />
      </Button>
    </div>
  );
};
