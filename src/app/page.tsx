import AddTodoFrom from "@/components/myUi/AddTodoFrom";
import ShowAllTodo from "@/components/myUi/ShowAllTodo";

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
