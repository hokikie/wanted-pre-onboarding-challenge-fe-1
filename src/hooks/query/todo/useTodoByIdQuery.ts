import { TODO_KEY } from "@/constants/key";
import api from "@/libs/axios/api";
import { TodoList } from "@/types/todo/TodoList";
import { useQuery } from "@tanstack/react-query";

const fetcher = (id: string) =>
  api
    .get(`/todos/${id}`)
    .then<TodoList>((res) => res?.data.data)
    .catch(console.error);

const useTodoByIdQuery = (id: string) => {
  return useQuery([TODO_KEY, id], () => fetcher(id));
};

export default useTodoByIdQuery;
