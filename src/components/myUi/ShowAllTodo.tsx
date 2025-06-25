"use client";
import { todosAtom } from "@/lib/atom";
import { useAtom } from "jotai";
import TodoCard from "./TodoCard";

const ShowAllTodo = () => {
    const [todos] = useAtom(todosAtom);

    if (todos.length === 0) {
        return (
            <>
                <div className="px-3 py-5 text-center text-xl text-balance">
                    Not anything Yet!😴
                </div>
            </>
        );
    }

    return (
        <>
            <div className="space-y-2 px-3 py-4">
                {todos.map((info, index) => (
                    <TodoCard
                        content={info}
                        id={index}
                        key={index}
                    />
                ))}
            </div>
        </>
    );
};

export default ShowAllTodo;
