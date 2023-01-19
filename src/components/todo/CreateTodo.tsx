import { Todo } from "@/types/todo/TodoList";
import useCreateTodoMutation from "../../hooks/mutation/todo/useCreateTodoMutation";
import TodoForm from "./TodoForm";

const CreateTodo = () => {
  const { mutate: createTodo } = useCreateTodoMutation();
  const onHandleCreate = (todo: Todo) => {
    createTodo(todo);
  };

  return <TodoForm onHandleCreate={onHandleCreate} add="추가" />;
};

export default CreateTodo;
