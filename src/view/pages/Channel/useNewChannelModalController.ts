import { channelService } from "../../../app/services/channelService";
import { useMutation, useQueryClient } from "@tanstack/react-query";

import toast from "react-hot-toast";
import { useModals } from "../../../app/contexts/useModals";
import { useState } from "react";

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
    console.log("🚀 ~ onChange ~ newChannel:", newChannel)
  };
   const handleSubmit = async (channel: string) => {
    try {
      await mutateAsync(channel);
      queryClient.invalidateQueries({ queryKey: ["channels"] });
      toast.success("Canal criado com sucesso!");
      closeNewChannelModal();
    } catch (error) {
      console.log("🚀 ~ handleSubmit ~ error:", error)
      toast.error("Erro ao criar o canal!");
    }
  };
 

  return {
    handleSubmit,
    isPending,
    onChange,
    nameChannel,
  };
}
