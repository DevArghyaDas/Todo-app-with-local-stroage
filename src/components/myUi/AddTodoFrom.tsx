"use client";

import { todosAtom } from "@/lib/atom";
import { useAtom } from "jotai";
import { Plus } from "lucide-react";
import { FormEvent, useState } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import toast from "react-hot-toast";

// Atom to store todos array in localStorage

const AddTodoFrom = () => {
    const [inputValue, setInputValue] = useState("");
    const [todos, setTodos] = useAtom(todosAtom);

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();

        if (!inputValue.trim()) return;

        if (inputValue.length >= 5) {
            const newTodos = [...todos, inputValue.trim()];
            setTodos(newTodos);
            toast.success("Todo successfully added");
            setInputValue("");
        } else {
            toast.error("todo-field must contain 5 characters");
        }
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="flex items-center gap-4 border-b px-3 pb-5">
            <Input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Add a todo"
            />
            <Button
                type="submit"
                className="cursor-pointer"
                disabled={
                    (inputValue === "" && true) || (inputValue === null && true)
                }>
                Add Todo <Plus />
            </Button>
        </form>
    );
};

export default AddTodoFrom;
