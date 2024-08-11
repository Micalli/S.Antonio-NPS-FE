import { useMutation, useQueryClient } from "@tanstack/react-query";

import toast from "react-hot-toast";
import { useState } from "react";
import { channelService } from '../../../../app/services/ChannelService';
import { useModals } from '../../../../app/contexts/useModals';

export function useNewChannelModalController() {
  const { closeNewChannelModal } = useModals();
  const [nameChannel, setNameChannel] = useState<any>();

  const queryClient = useQueryClient();
  const { mutateAsync, isPending } = useMutation({
    mutationFn: async (channel: string) => {
      return channelService.create(channel);
    },
  });
  const onChange = (newChannel: string) => {
    setNameChannel(newChannel.trim());
  };
   const handleSubmit = async (channelId: string) => {
    try {
      await mutateAsync(channelId);

      queryClient.invalidateQueries({ queryKey: ["channels"] });
      toast.success("Canal criado com sucesso!");
      closeNewChannelModal();
    } catch (error) {
      console.log("🚀 ~ handleSubmit ~ error:", error)
      toast.error("Erro ao deletar o canal!");
    }
  };
 

  return {
    handleSubmit,
    isPending,
    onChange,
    nameChannel,
  };
}
