import { TODO_KEY } from "@/constants/key";
import api from "@/libs/axios/api";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const fetcher = (id: string) =>
  api
    .delete(`/todos/${id}`)
    .then((_) => {
      window.location.replace("/");
      console.log("todos successfully deleted");
    })
    .catch(console.error);

const useDeleteTodoMutation = () => {
  const queryClient = useQueryClient();
  return useMutation(fetcher, {
    onSuccess: () => {
      queryClient.invalidateQueries<string>([TODO_KEY]);
    },
  });
};

export default useDeleteTodoMutation;
