import { TODO_KEY } from "@/constants/key";
import api from "@/libs/axios/api";
import { TodoList } from "@/types/todo/TodoList";
import { useQuery } from "@tanstack/react-query";

const fetcher = () =>
  api
    .get("/todos")
    .then<TodoList[]>((res) => res?.data.data)
    .catch(console.error);

const useTodoQuery = () => {
  return useQuery([TODO_KEY], fetcher);
};

export default useTodoQuery;
