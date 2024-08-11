import { useMutation, useQueryClient } from "@tanstack/react-query";

import toast from "react-hot-toast";
import { useCallback, useState } from "react";
import { channelService } from "../../../../app/services/channelService";
import { useModals } from "../../../../app/contexts/useModals";
import { ChannelUpdateParams } from "../../../../app/services/channelService/edit";

export function useUpdateChannelModalController() {
  const [newChannelName, setNewChannelName] = useState<any>();
  const [updatedChannelId, setUpdatedChannelId] = useState<any>();

  const {
    closeUpdateChannelModal,
  } = useModals();

  const handleUpdateChannel = useCallback((updatedChannel: string) => {
    setUpdatedChannelId(updatedChannel);
  }, []);

  const onChange = (newChannel: string) => {
    setNewChannelName(newChannel.trim());
  };

  const queryClient = useQueryClient();
  const { mutateAsync, isPending } = useMutation({
    mutationFn: async (data: ChannelUpdateParams) => {
      return channelService.edit(data);
    },
  });

  const handleSubmit = async (data: ChannelUpdateParams) => {
    try {
      await mutateAsync(data);

      queryClient.invalidateQueries({ queryKey: ["channels"] });
      toast.success("Canal editado com sucesso!");
      closeUpdateChannelModal();
    } catch (error) {
      console.log("🚀 ~ handleSubmit ~ error:", error);
      toast.error("Erro ao editar o canal!");
    }
  };

  return {
    isPending,
    handleUpdateChannel,
    updatedChannelId,
    newChannelName,
    handleSubmit,
    onChange,
  };
}
