import React, { useState } from "react";
import { Loader2, PlusCircle } from "lucide-react";
import { addTodo } from "@entities/todo";
import { Input } from "@shared/ui/input";
import { Button } from "@shared/ui/button";
import { useAppDispatch } from "@shared/lib/hooks/use-app-dispatch";
import { toast } from "react-toastify";

export const AddTodoForm: React.FC = () => {
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(false);

  const dispatch = useAppDispatch();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!text.trim()) {
      toast.warning("Поле не может быть пустым!");
      return;
    }
    setLoading(true);

    dispatch(addTodo(text.trim())).then(({ meta }) => {
      if (meta.requestStatus === "fulfilled") {
        setText("");
      }

      setLoading(false);
    });
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit} className="mb-6">
      <div className="flex items-center space-x-2">
        <Input
          type="text"
          value={text}
          disabled={loading}
          onChange={onChange}
          placeholder="Добавить новую таску..."
          fullWidth
        />
        <Button disabled={loading} type="submit" variant="primary">
          {loading ? (
            <Loader2 size={24} className="animate-spin" />
          ) : (
            <PlusCircle size={24} />
          )}
        </Button>
      </div>
    </form>
  );
};
