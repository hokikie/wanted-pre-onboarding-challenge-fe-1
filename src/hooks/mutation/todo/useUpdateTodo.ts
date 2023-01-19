import { TODO_KEY } from "@/constants/key";
import api from "@/libs/axios/api";
import { TodoUpdate } from "@/types/todo/TodoList";
import { useQueryClient } from "@tanstack/react-query";
import { useMutation } from "@tanstack/react-query";

const fetcher = ({ id, ...todo }: TodoUpdate) =>
  api
    .put(`/todos/${id}`, todo)
    .then((_) => {
      console.log("todos successfully updated");
    })
    .catch(console.error);

const useUpdateTodoMutation = () => {
  const queryClient = useQueryClient();
  return useMutation(fetcher, {
    onSuccess: () => {
      queryClient.invalidateQueries<string>([TODO_KEY]);
    },
  });
};

export default useUpdateTodoMutation;
