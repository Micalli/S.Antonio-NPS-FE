import { useModals } from '../../../app/contexts/useModals';
import { Button } from "../../components/Button";
import { Modal } from "../../components/Modal";
import { useUpdateQuestionModalController } from './controllers/useUpdateChannelModalController';

interface UpdateQuestionModalProps {
  questionId: string;
}

export function UpdateQuestionModal({ questionId }: UpdateQuestionModalProps) {
  const { isUpdateQuestionModalOpen, closeUpdateQuestionModal } = useModals();

  const { isPending, handleSubmit, onChange, newQuestion } =
    useUpdateQuestionModalController();
  return (
    <Modal
      title="Editar Pergunta"
      open={isUpdateQuestionModalOpen}
      onClose={closeUpdateQuestionModal}
    >
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit({ questionId, newQuestion });
        }}
      >
        <input
          className="bg-white w-full rounded-lg border border-gray-500 px-3 h-[40px] text-gray-800   focus:border-gray-800 transition-all outline-none"
          type="text"
          name="newChannel"
          placeholder="Pergunta"
          onChange={(e) => onChange(e.target.value)}
          autoComplete="off"
        />
        <div className="flex justify-center mt-10 gap-4 ">
          <Button
            className="w-full"
            isLoading={isPending}
            disabled={!newQuestion}
          >
            Alterar
          </Button>
          <Button
            className="w-full  bg-gray-400 hover:bg-gray-500  active:bg-gray-300"
            isLoading={isPending}
            onClick={closeUpdateQuestionModal}
          >
            Cancelar
          </Button>
        </div>
      </form>
    </Modal>
  );
}
