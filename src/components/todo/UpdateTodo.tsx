import useUpdateTodoMutation from "@/hooks/mutation/todo/useUpdateTodo";
import Modal from "../common/modal/Modal";
import { useForm } from "react-hook-form";
import { Todo } from "@/types/todo/TodoList";
import { yupResolver } from "@hookform/resolvers/yup";
import { todoScheme } from "@/utils/yup/yup";
import Label from "../common/Label/index";
import { Input } from "../common/input/index";
import useTodoByIdQuery from "../../hooks/query/todo/useTodoByIdQuery";
import { ErrorFeedback } from "../common/error/index";

interface UpdateTodoProps {
  id: string;
  isActive: boolean;
  setActive: (isActive: boolean) => void;
}

const UpdateTodo = ({ id, isActive, setActive }: UpdateTodoProps) => {
  const { mutate: todoUpdate } = useUpdateTodoMutation();
  const { data: todoById } = useTodoByIdQuery(id);
  const closeModal = () => {
    setActive(false);
  };
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm<Todo>({
    mode: "onBlur",
    resolver: yupResolver(todoScheme),
    defaultValues: {
      title: todoById?.title,
      content: todoById?.content,
    },
  });

  const onHandleUpdate = () => {
    const updateTodoData = getValues();
    todoUpdate({ id, ...updateTodoData });
    closeModal();
  };

  return (
    <>
      {isActive && (
        <Modal
          closeModal={closeModal}
          handleSubmit={onHandleUpdate}
          cancel="취소"
          confirm="확인"
        >
          <form className="grid gap-4" onSubmit={handleSubmit(onHandleUpdate)}>
            <Label htmlFor="title">제목</Label>
            <Input className="text" {...register("title")} />
            {errors?.title && (
              <ErrorFeedback>{errors?.title.message}</ErrorFeedback>
            )}
            <Label htmlFor="content">내용</Label>
            <Input type="text" {...register("content")} />
            {errors?.content && (
              <ErrorFeedback>{errors?.content.message}</ErrorFeedback>
            )}
          </form>
          내용을 수정하시겠습니까?
        </Modal>
      )}
    </>
  );
};

export default UpdateTodo;
