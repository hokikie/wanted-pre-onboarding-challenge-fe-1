import MainButton, { SubButton } from "../button/index";
import { RiCloseCircleFill } from "react-icons/ri";

interface ModalProps {
  closeModal: () => void;
  handleSubmit: () => void;
  cancel: string;
  children: React.ReactNode;
  confirm: string;
}
const Modal = ({
  closeModal,
  handleSubmit,
  cancel,
  confirm,
  children,
}: ModalProps) => {
  return (
    <main className="absolute inset-0 z-0 flex items-center justify-center">
      <div
        onClick={closeModal}
        className="w-full h-full bg-black bg-opacity-50 z-10"
      ></div>
      <div className="fixed w-[50%] h-fit rounded-md shadow-md bg-white z-20">
        <div className="grid p-8 gap-4">
          <div className="absolute w-8 h-8 right-0 top-0 translate-x-[50%] -translate-y-[50%] bg-white rounded-full duration-300 cursor-pointer hover:scale-95">
            <RiCloseCircleFill
              className="w-full h-full text-slate-700 hover:text-indigo-500"
              onClick={closeModal}
            />
          </div>
          {children}
          <div className="flex justify-around gap-2">
            <SubButton className="w-full" onClick={closeModal}>
              {cancel}
            </SubButton>
            <MainButton className="w-full" onClick={handleSubmit}>
              {confirm}
            </MainButton>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Modal;
