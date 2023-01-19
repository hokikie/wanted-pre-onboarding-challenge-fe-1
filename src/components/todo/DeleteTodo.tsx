import Modal from "../common/modal/Modal";
import useDeleteTodoMutation from "@hooks/mutation/todo/useDeleteTodoMutation";

interface DeleteTodoProps {
  id: string;
  isOpen: boolean;
  setOpen: (isOpen: boolean) => void;
}
const DeleteTodo = ({ id, isOpen, setOpen }: DeleteTodoProps) => {
  const { mutate } = useDeleteTodoMutation();

  const closeModal = () => {
    setOpen(false);
  };
  const handleDelete = () => {
    closeModal();
    mutate(id);
  };
  return (
    <>
      {isOpen && (
        <Modal
          closeModal={closeModal}
          handleSubmit={handleDelete}
          cancel="취소"
          confirm="확인"
        >
          해당 게시글을 삭제하시겠습니까?
        </Modal>
      )}
    </>
  );
};

export default DeleteTodo;
