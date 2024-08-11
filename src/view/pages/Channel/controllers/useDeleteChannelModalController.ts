import { useMutation, useQueryClient } from "@tanstack/react-query";

import toast from "react-hot-toast";
import { useCallback, useState } from "react";
import { channelService } from '../../../../app/services/ChannelService';
import { useModals } from '../../../../app/contexts/useModals';

export function useDeleteChannelModalController() {
  const [deletedChannel, setDeletedChannel] = useState<any>();
  const { closeDeleteChannelModal,  } = useModals();



   const handleDeletedChannel = useCallback((deletedChannel:string) => {
     setDeletedChannel(deletedChannel);
   }, []);
  


  const queryClient = useQueryClient();
  const { mutateAsync, isPending } = useMutation({
    mutationFn: async (channelId: string) => {
      return channelService.deleteChannel(channelId);
    },
  });

   const handleSubmit = async (channelId: string) => {
     try {
       await mutateAsync(channelId);
       queryClient.invalidateQueries({ queryKey: ["channels"] });
       toast.success("Canal deletado com sucesso!");
       closeDeleteChannelModal();
     } catch (error) {
       console.log("🚀 ~ handleSubmit ~ error:", error);
       toast.error("Erro ao criar o canal!");
     }
   };
 

  return {
    isPending,
    handleDeletedChannel,
    deletedChannel,
    handleSubmit,
    setDeletedChannel,
  };
}
