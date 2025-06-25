"use client";
import { TodoCardType } from "@/lib/types";
import DeleteTodo from "./DeleteTodo";

const TodoCard = ({ id, content }: TodoCardType) => {
    return (
        <>
            <div className="flex items-center justify-between rounded-xl border p-4">
                {content}
                <DeleteTodo id={id} />
            </div>
        </>
    );
};

export default TodoCard;
