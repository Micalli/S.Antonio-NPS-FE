import { useModals } from "../../../app/contexts/useModals";
import { Button } from "../../components/Button";
import { Modal } from "../../components/Modal";
import { useUpdateChannelModalController } from "./controllers/useUpdateChannelModalController";

interface UpdateChannelModalProps {
  channelId: string;
}

export function UpdateChannelModal({ channelId }: UpdateChannelModalProps) {
  const { isUpdateChannelModalOpen, closeUpdateChannelModal } = useModals();

  const { isPending, handleSubmit, onChange, newChannelName } =
    useUpdateChannelModalController();

  return (
    <Modal
      title="Editar Nome do Canal"
      open={isUpdateChannelModalOpen}
      onClose={closeUpdateChannelModal}
    >
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit({ channelId, newChannelName });
        }}
      >
        <input
          className="bg-white w-full rounded-lg border border-gray-500 px-3 h-[40px] text-gray-800   focus:border-gray-800 transition-all outline-none"
          type="text"
          name="newChannel"
          placeholder="Nome no canal"
          onChange={(e) => onChange(e.target.value)}
          autoComplete="off"
        />
        <div className="flex justify-center mt-10 gap-4 ">
          <Button
            className="w-full"
            isLoading={isPending}
            disabled={!newChannelName}
          >
            Alterar
          </Button>
          <Button
            className="w-full  bg-gray-400 hover:bg-gray-500  active:bg-gray-300"
            isLoading={isPending}
            onClick={closeUpdateChannelModal}
          >
            Cancelar
          </Button>
        </div>
      </form>
    </Modal>
  );
}
