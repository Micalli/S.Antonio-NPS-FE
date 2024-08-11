import { useModals } from "../../../app/contexts/useModals";
import { Button } from "../../components/Button";
import { Modal } from "../../components/Modal";
import { useUpdateAnswerModalController } from './controllers/useUpdateChannelModalController';

interface UpdateAnswerModalProps {
  answerId: string;
}

export function UpdateAnswerModal({ answerId }: UpdateAnswerModalProps) {
  const { isUpdateAnswerModalOpen, closeUpdateAnswersModal} = useModals();

  const { isPending, handleSubmit, onChange, newAnswer } =
    useUpdateAnswerModalController();

  return (
    <Modal
      title="Editar Resposta"
      open={isUpdateAnswerModalOpen}
      onClose={closeUpdateAnswersModal}
    >
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit({ answerId, newAnswer });
        }}
      >
        <input
          className="bg-white w-full rounded-lg border border-gray-500 px-3 h-[40px] text-gray-800   focus:border-gray-800 transition-all outline-none"
          type="text"
          name="newChannel"
          placeholder="Resposta"
          onChange={(e) => onChange(e.target.value)}
          autoComplete="off"
        />
        <div className="flex justify-center mt-10 gap-4 ">
          <Button
            className="w-full"
            isLoading={isPending}
            disabled={!newAnswer}
          >
            Alterar
          </Button>
          <Button
            className="w-full  bg-gray-400 hover:bg-gray-500  active:bg-gray-300"
            isLoading={isPending}
            onClick={closeUpdateAnswersModal}
          >
            Cancelar
          </Button>
        </div>
      </form>
    </Modal>
  );
}
