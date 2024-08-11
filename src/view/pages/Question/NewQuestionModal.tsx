import { useModals } from "../../../app/contexts/useModals";
import { Button } from "../../components/Button";
import { Modal } from "../../components/Modal";
import { useNewQuestionModalController } from "./controllers/useNewQuestionModalController";
interface newQuestionModalProps {
  channelId?: string;
}
export function NewQuestionModal({ channelId }: newQuestionModalProps) {
  const { isNewQuestionModalOpen, closeNewQuestionModal } = useModals();
  const { handleSubmit, isPending, onChange, newQuestion } =
  useNewQuestionModalController();

  return (
    <Modal
      title="Novo Pergunta"
      open={isNewQuestionModalOpen}
      onClose={closeNewQuestionModal}
    >
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit({ channelId, newQuestion });
        }}
      >
        <input
          className="bg-white w-full rounded-lg border border-gray-500 px-3 h-[40px] text-gray-800   focus:border-gray-800 transition-all outline-none"
          type="text"
          name="newQuestion"
          placeholder="Pergunta"
          onChange={(e) => onChange(e.target.value)}
          autoComplete="off"
        />
        <div className="flex justify-center mt-10">
          <Button
            className="w-full"
            disabled={!newQuestion}
            isLoading={isPending}
          >
            Criar
          </Button>
        </div>
      </form>
    </Modal>
  );
}
