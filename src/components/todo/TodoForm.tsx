import { Todo } from "@/types/todo/TodoList";
import { todoScheme } from "@/utils/yup/yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { SubmitForm, Input } from "../common/input/index";
import Label from "../common/Label/index";
import { ErrorFeedback } from "../common/error/index";

interface TodoFormProps {
  add: string;
  onHandleCreate: (data: Todo) => void;
}
const TodoForm = ({ onHandleCreate, add }: TodoFormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Todo>({
    mode: "onBlur",
    resolver: yupResolver(todoScheme),
  });
  return (
    <form className="w-full grid gap-4" onSubmit={handleSubmit(onHandleCreate)}>
      <Label htmlFor="title">제목</Label>
      <Input type="text" {...register("title")} />
      {errors?.title && <ErrorFeedback>{errors?.title.message}</ErrorFeedback>}
      <Label htmlFor="content">내용</Label>
      <Input type="text" {...register("content")} />
      {errors?.content && (
        <ErrorFeedback>{errors?.content.message}</ErrorFeedback>
      )}
      <SubmitForm type="submit" value={add} />
    </form>
  );
};

export default TodoForm;
