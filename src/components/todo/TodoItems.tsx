import { TodoList } from "@/types/todo/TodoList";
import { Link } from "react-router-dom";

interface TodoItems {
  todos: TodoList[];
}
const TodoItems = ({ todos }: TodoItems) => {
  return (
    <>
      <ul className="overflow-y-auto overflow-x-hidden">
        {todos?.map(({ id, title }, index) => (
          <li key={id} className="even:bg-slate-50">
            <Link to={`/todos/${index + 1}`} state={{ id }}>
              <p className="text-slate-700 font-medium truncate hover:text-blue-500 text-center py-2 ">
                {title}
              </p>
            </Link>
          </li>
        ))}
      </ul>
      {todos?.length < 1 && <p>할 일을 추가해주세요</p>}
    </>
  );
};

export default TodoItems;
