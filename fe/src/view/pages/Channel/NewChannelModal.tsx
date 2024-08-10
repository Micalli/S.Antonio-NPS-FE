import { useModals } from "../../../app/contexts/useModals";
import { Button } from "../../components/Button";
import { Modal } from "../../components/Modal";
import { useNewChannelModalController } from "./useNewChannelModalController";

export function NewChannelModal() {
  const { isNewChannelModalOpen, closeNewChannelModal } = useModals();
  const { handleSubmit, isPending, onChange, nameChannel } =
    useNewChannelModalController();

  return (
    <Modal
      title="Novo canal"
      open={isNewChannelModalOpen}
      onClose={closeNewChannelModal}
    >
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit(nameChannel);
        }}
      >
        {/* <Input
          placeholder="Nome no canal"
          onChange={(e) => onChange(e.target.value)}

          
        /> */}
        <input
          className="bg-white w-full rounded-lg border border-gray-500 px-3 h-[40px] text-gray-800   focus:border-gray-800 transition-all outline-none"
          type="text"
          name="newChannel"
          placeholder="Nome no canal"
          onChange={(e) => onChange(e.target.value)}
          autoComplete='off'
        />
        <div className="flex justify-center mt-10">
          <Button
            className="w-full"
            disabled={!nameChannel}
            isLoading={isPending}
          >
            Criar
          </Button>
        </div>
      </form>
    </Modal>
  );
}
