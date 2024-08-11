import { useModals } from "../../../app/contexts/useModals";
import { Button } from "../../components/Button";
import { Modal } from "../../components/Modal";
import { useDeleteAnswerModalController } from "./controllers/useDeleteAnswersModalController";

interface DeleteAnswerModalProps {
  answerId: string;
}

export function DeleteAnswerModal({ answerId }: DeleteAnswerModalProps) {
  const { isDeleteAnswerModalOpen, closeDeleteAnswersModal } = useModals();

  const { isPending, handleSubmit } = useDeleteAnswerModalController();

  return (
    <Modal
      title="Deletar resposta"
      open={isDeleteAnswerModalOpen}
      onClose={closeDeleteAnswersModal}
    >
      <div className="text-gray-400">Você deseja deletar a resposta?</div>
      <div className="flex justify-center mt-10 gap-4 ">
        <Button
          className="w-full"
          isLoading={isPending}
          onClick={() => handleSubmit(answerId)}
        >
          Deletar
        </Button>
        <Button
          className="w-full  bg-gray-400 hover:bg-gray-500  active:bg-gray-300"
          isLoading={isPending}
          onClick={closeDeleteAnswersModal}
        >
          Cancelar
        </Button>
      </div>
    </Modal>
  );
}
