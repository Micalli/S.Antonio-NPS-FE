import { useModals } from '../../../app/contexts/useModals';
import { Button } from '../../components/Button';
import { Modal } from '../../components/Modal';
import { useNewAnswerModalController } from './controllers/useNewQuestionModalController';


interface newAnswerModalProps {
  questionId?: string;
}
export function NewAnswerModal({ questionId }: newAnswerModalProps) {
  const { isNewAnswerModalOpen, closeNewAnswersModal } = useModals();
  const { handleSubmit, isPending, onChange, newAnswer } =
    useNewAnswerModalController();

  return (
    <Modal
      title="Novo Resposta"
      open={isNewAnswerModalOpen}
      onClose={closeNewAnswersModal}
    >
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit({ questionId, answer: newAnswer });
        }}
      >
        <input
          className="bg-white w-full rounded-lg border border-gray-500 px-3 h-[40px] text-gray-800   focus:border-gray-800 transition-all outline-none"
          type="text"
          name="newQuestion"
          placeholder="Resposta"
          onChange={(e) => onChange(e.target.value)}
          autoComplete="off"
        />
        <div className="flex justify-center mt-10">
          <Button
            className="w-full"
            disabled={!newAnswer}
            isLoading={isPending}
          >
            Criar
          </Button>
        </div>
      </form>
    </Modal>
  );
}
