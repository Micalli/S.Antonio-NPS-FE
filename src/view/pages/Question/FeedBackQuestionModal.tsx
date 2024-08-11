import { useModals } from "../../../app/contexts/useModals";
import { Button } from "../../components/Button";
import { Modal } from "../../components/Modal";
import { useFeedbackQuestionModalController } from "./controllers/useFeedbackQuestionModalController";
interface FeedbackQuestionModalProps {
  questionId?: string;
  gradedQuestion?: number;
}
export function FeedBackQuestionModal({
  questionId,
  gradedQuestion,
}: FeedbackQuestionModalProps) {
  const { isFeedBackQuestionModalOpen, closeFeedbackQuestionModal } =
    useModals();

  const { onChange, questionNote, mutateQueryRateQuestion, isPending } =
  useFeedbackQuestionModalController();

  console.log("🚀 11~ questionId ~ questionId:", questionId);
  console.log("🚀 11~ questionNote ~ questionNote:", questionNote);


  return (
    <Modal
      title="Por que não gostou?"
      open={isFeedBackQuestionModalOpen}
      onClose={closeFeedbackQuestionModal}
    >
      <form
        onSubmit={(e) => {
          e.preventDefault();
          mutateQueryRateQuestion({
            questionId,
            grade: gradedQuestion,
            note: questionNote,
          });
        }}
      >
        <input
          className="bg-white w-full rounded-lg border border-gray-500 px-3 h-[40px] text-gray-800   focus:border-gray-800 transition-all outline-none"
          type="text"
          name="newQuestion"
          placeholder="Motivo"
          onChange={(e) => onChange(e.target.value)}
          autoComplete="off"
        />
        <div className="flex justify-center mt-10">
          <Button
            className="w-full"
            disabled={!questionNote}
            isLoading={isPending}
          >
            Enviar
          </Button>
        </div>
      </form>
    </Modal>
  );
}
