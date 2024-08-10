import { useModals } from "../../../app/contexts/useModals";
import { Button } from "../../components/Button";
import { Modal } from "../../components/Modal";
import { useDeleteChannelModalController } from "./controllers/useDeleteChannelModalController";

interface DeleteChannelModalProps {
  channelId: string;
}

export function DeleteChannelModal({ channelId }: DeleteChannelModalProps) {
  const { isDeleteChannelModalOpen, closeDeleteChannelModal } = useModals();

  const { isPending, handleSubmit } = useDeleteChannelModalController();

  return (
    <Modal
      title="Deletar Canal"
      open={isDeleteChannelModalOpen}
      onClose={closeDeleteChannelModal}
    >
      <div className="text-gray-400">Você deseja deletar o canal?</div>
      <div className="flex justify-center mt-10 gap-4 ">
        <Button
          className="w-full"
          isLoading={isPending}
          onClick={() => handleSubmit(channelId)}
        >
          Deletar
        </Button>
        <Button
          className="w-full  bg-gray-400 hover:bg-gray-500  active:bg-gray-300"
          isLoading={isPending}
          onClick={closeDeleteChannelModal}
        >
          Cancelar
        </Button>
      </div>
    </Modal>
  );
}
