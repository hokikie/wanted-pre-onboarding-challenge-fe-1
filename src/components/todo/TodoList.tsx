import useTodoQuery from "@/hooks/query/todo/useTodoQuery";
import CreateTodo from "./CreateTodo";
import TodoItems from "./TodoItems";
import Signout from "../auth/Signout";

const TodoList = () => {
  const { data: todos } = useTodoQuery();
  return (
    <div>
      <Signout />
      <main className="w-[30rem] h-[40rem] gap-2 flex flex-col shadow-md border rounded-lg p-4 ">
        <CreateTodo />
        <TodoItems todos={todos!} />
      </main>
    </div>
  );
};

export default TodoList;
