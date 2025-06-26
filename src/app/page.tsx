import AddTodoFrom from "@/components/myUi/AddTodoFrom";
import ShowAllTodo from "@/components/myUi/ShowAllTodo";
import { Metadata } from "next";

export const metaData: Metadata = {
    title: "Todo | Home",
    description: "homepage of todo app",
};

const page = () => {
    return (
        <>
            <div className="pt-20">
                <AddTodoFrom />
                <ShowAllTodo />
            </div>
        </>
    );
};

export default page;
