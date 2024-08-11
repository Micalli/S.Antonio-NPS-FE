import { useMutation, useQueryClient } from "@tanstack/react-query";

import toast from "react-hot-toast";
import { useCallback, useState } from "react";
import { useModals } from "../../../../app/contexts/useModals";
import { AnswerUpdateParams } from '../../../../app/services/AnswerService/edit';
import { answerService } from '../../../../app/services/AnswerService';

export function useUpdateAnswerModalController() {
  const [newAnswer, setNewAnswer] = useState<any>();
  const [updatedAnswerId, setUpdatedAnswerId] = useState<any>();

  const {
    closeUpdateAnswersModal,
  } = useModals();

  const handleUpdateChannel = useCallback((updatedChannel: string) => {
    setUpdatedAnswerId(updatedChannel);
  }, []);

  const onChange = (newChannel: string) => {
    setNewAnswer(newChannel.trim());
  };

  const queryClient = useQueryClient();
  const { mutateAsync, isPending } = useMutation({
    mutationFn: async (data: AnswerUpdateParams) => {
      return  answerService.edit(data)
    },
  });

  const handleSubmit = async (data: AnswerUpdateParams) => {
    try {
      await mutateAsync(data);

      queryClient.invalidateQueries({ queryKey: ["answers"] });
      toast.success("Resposta editado com sucesso!");
      closeUpdateAnswersModal();
    } catch (error) {
      console.log("🚀 ~ handleSubmit ~ error:", error);
      toast.error("Erro ao editar o Resposta!");
    }
  };

  return {
    isPending,
    handleUpdateChannel,
    newAnswer,
    updatedAnswerId,
    handleSubmit,
    onChange,
  };
}
