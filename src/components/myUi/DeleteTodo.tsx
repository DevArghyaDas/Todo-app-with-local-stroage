import { todosAtom } from "@/lib/atom";
import { useAtom } from "jotai";
import { Trash2 } from "lucide-react";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";

const DeleteTodo = ({ id }: { id: number }) => {
    const [todos, setTodos] = useAtom(todosAtom);
    const deleteTodoItem = () => {
        const updatedTodo = todos.filter((todos, index) => {
            return index !== id;
        });

        setTodos(updatedTodo);
    };

    return (
        <>
            <Tooltip>
                <TooltipTrigger asChild>
                    <button
                        onClick={deleteTodoItem}
                        aria-label="Delete todo"
                        className="cursor-pointer">
                        <Trash2 />
                    </button>
                </TooltipTrigger>
                <TooltipContent>
                    <p>Delete todo</p>
                </TooltipContent>
            </Tooltip>
        </>
    );
};

export default DeleteTodo;
