import toast from "react-hot-toast";
import { useMutation, useQueryClient } from "@tanstack/react-query";

import {  useState } from "react";
import { useModals } from "../../../../app/contexts/useModals";
import { answerService } from '../../../../app/services/AnswerService';
import { NewAnswerParams } from '../../../../app/services/AnswerService/create';

export function useNewAnswerModalController() {
  const { closeNewAnswersModal } = useModals();
  const [newAnswer, setnewAnswer] = useState<any>();
  

  const onChange = (newQuestion: string) => {
    setnewAnswer(newQuestion.trim());
  };

  const queryClient = useQueryClient();
  const { mutateAsync, isPending } = useMutation({
    mutationFn: async (data: NewAnswerParams) => {
      return answerService.create(data);
    },
  });

  const handleSubmit = async (data: NewAnswerParams) => {
    try {
      await mutateAsync(data);

      queryClient.invalidateQueries({ queryKey: ["answers"] });
      toast.success("Resposta criada com sucesso!");
      closeNewAnswersModal();
    } catch (error) {
      console.log("🚀 ~ handleSubmit ~ error:", error);
      toast.error("Erro ao criar resposta!");
    }
  };

  return {
    handleSubmit,
    isPending,
    onChange,
    newAnswer,
  };
}
