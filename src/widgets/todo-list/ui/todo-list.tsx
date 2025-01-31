import React, { useEffect } from "react";
import { ClipboardList, Loader2 } from "lucide-react";
import {
  fetchTodos,
  selectFilteredTodos,
  selectLoading,
  selectTodos,
  TodoItem,
} from "@entities/todo";
import { useAppSelector } from "@shared/lib/hooks/use-app-selector";
import { useAppDispatch } from "@shared/lib/hooks/use-app-dispatch";

export const TodoList: React.FC = () => {
  const dispach = useAppDispatch();
  const allTodos = useAppSelector(selectTodos);
  const loading = useAppSelector(selectLoading);
  const filteredTodos = useAppSelector(selectFilteredTodos);

  useEffect(() => {
    dispach(fetchTodos());
  }, [dispach]);

  if (!allTodos.length) {
    return (
      <div className="text-center py-12">
        {loading ? (
          <Loader2 size={32} className="animate-spin w-full" />
        ) : (
          <>
            <ClipboardList size={48} className="mx-auto text-gray-300 mb-4" />
            <p className="text-gray-500">
              Нету задач. Добавьте вашу первую задачу!
            </p>
          </>
        )}
      </div>
    );
  }

  return (
    <div className="space-y-2">
      {filteredTodos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
      {!filteredTodos.length && (
        <p className="text-center text-gray-500 py-4">
          По фильтру не найдены задачи
        </p>
      )}
    </div>
  );
};
