import { useModals } from "../../../app/contexts/useModals";
import { Button } from "../../components/Button";
import { Modal } from "../../components/Modal";
import { useDeleteQuestionModalController } from './controllers/useDeleteQuestionModalController';

interface DeleteChannelModalProps {
  questionId: string;
}

export function DeleteQuestionModal({ questionId }: DeleteChannelModalProps) {
  const { isDeleteQuestionModalOpen, closeDeleteQuestionModal } = useModals();

  const { isPending, handleSubmit } = useDeleteQuestionModalController();

  return (
    <Modal
      title="Deletar Pergunta"
      open={isDeleteQuestionModalOpen}
      onClose={closeDeleteQuestionModal}
    >
      <div className="text-gray-400">Você deseja deletar a pergunta?</div>
      <div className="flex justify-center mt-10 gap-4 ">
        <Button
          className="w-full"
          isLoading={isPending}
          onClick={() => handleSubmit(questionId)}
        >
          Deletar
        </Button>
        <Button
          className="w-full  bg-gray-400 hover:bg-gray-500  active:bg-gray-300"
          isLoading={isPending}
          onClick={closeDeleteQuestionModal}
        >
          Cancelar
        </Button>
      </div>
    </Modal>
  );
}
