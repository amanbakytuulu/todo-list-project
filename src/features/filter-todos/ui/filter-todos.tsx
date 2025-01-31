import React from "react";
import { selectFilter, setFilter, TodoFilter } from "@entities/todo";
import { Button } from "@shared/ui/button";
import { useAppDispatch } from "@shared/lib/hooks/use-app-dispatch";
import { useAppSelector } from "@shared/lib/hooks/use-app-selector";
import { useSearchParams } from "react-router-dom";
import { CURRENT_FILTER } from "@shared/config";

const filtersList: Record<TodoFilter, string> = {
  all: "Все",
  active: "Активные",
  completed: "Завершенные",
};

export const FilterTodos: React.FC = () => {
  const dispatch = useAppDispatch();
  const currentFilter = useAppSelector(selectFilter);

  const [searchParams, setSearchParams] = useSearchParams();

  const onFilter = (key: TodoFilter) => {
    dispatch(setFilter(key));
    searchParams.set(CURRENT_FILTER, key);
    setSearchParams(searchParams);
  };

  return (
    <div className="flex justify-center space-x-4 mb-6">
      {Object.entries(filtersList).map(([key, val]) => (
        <Button
          key={key}
          onClick={() => onFilter(key as TodoFilter)}
          variant={currentFilter === key ? "primary" : "secondary"}
        >
          {val}
        </Button>
      ))}
    </div>
  );
};
