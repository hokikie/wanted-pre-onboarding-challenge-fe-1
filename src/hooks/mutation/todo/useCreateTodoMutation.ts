import { TODO_KEY } from "@/constants/key";
import api from "@/libs/axios/api";
import { Todo } from "@/types/todo/TodoList";
import { useQueryClient } from "@tanstack/react-query";
import { useMutation } from "@tanstack/react-query";

const fetcher = (todo: Todo) =>
  api
    .post("/todos/", todo)
    .then((_) => {
      console.log("todos successfully created");
    })
    .catch(console.error);

const useCreateTodoMutation = () => {
  const queryClient = useQueryClient();
  return useMutation(fetcher, {
    onSuccess: () => {
      queryClient.invalidateQueries<string>([TODO_KEY]);
    },
  });
};

export default useCreateTodoMutation;
