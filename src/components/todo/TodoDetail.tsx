import useTodoByIdQuery from "@/hooks/query/todo/useTodoByIdQuery";
import { Link, useLocation } from "react-router-dom";
import DeleteTodo from "./DeleteTodo";
import { useState } from "react";
import UpdateTodo from "./UpdateTodo";
import MainButton from "../common/button";
import { SubButton } from "../common/button/index";
import { IoArrowBack } from "react-icons/io5";
import { timeFormat } from "@/utils/common/time/format";

const TodoDetail = () => {
  const { state } = useLocation();
  const { data: todoById } = useTodoByIdQuery(state.id);
  const [isActive, setActive] = useState(false);
  const [isOpen, setOpen] = useState(false);
  const postDate = () => {
    if (!todoById) return;
    return timeFormat(todoById?.createdAt!);
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
      <main className="w-[30rem] flex flex-col break-all shadow-md border rounded-lg p-4">
        <Link to="/" className="w-4 h-4">
          <IoArrowBack className="w-full h-full text-indigo-500 hover:text-opacity-70" />
        </Link>
        <hr className="my-2" />
        <h1>{todoById?.title}</h1>
        <p className="text-sm">{postDate()}</p>
        <p className="rounded-md text-2xl text-semibold py-4">
          {todoById?.content}
        </p>
        <div className="w-full flex justify-around gap-4 py-4">
          <SubButton className="w-full" onClick={() => setActive(true)}>
            수정
          </SubButton>
          <MainButton className="w-full" onClick={() => setOpen(true)}>
            삭제
          </MainButton>
        </div>
      </main>
      <>
        {isActive && (
          <UpdateTodo
            isActive={isActive}
            setActive={setActive}
            id={todoById?.id ?? ""}
          />
        )}
        {isOpen && (
          <DeleteTodo
            isOpen={isOpen}
            setOpen={setOpen}
            id={todoById?.id ?? ""}
          />
        )}
      </>
    </div>
  );
};

export default TodoDetail;
