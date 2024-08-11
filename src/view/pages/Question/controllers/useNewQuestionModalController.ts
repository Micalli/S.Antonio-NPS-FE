import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

import { useCallback, useState } from "react";
import { useModals } from "../../../../app/contexts/useModals";
import { questionService } from "../../../../app/services/QuestionService";
import { NewQuestionParams } from "../../../../app/services/QuestionService/create";

export function useNewQuestionModalController() {
  const { closeNewQuestionModal } = useModals();
  const [newQuestion, setnewQuestion] = useState<any>();
  const [newChannelId, setNewChannelId] = useState<any>();

  const handleChannelId = useCallback((channelId: string) => {
    setNewChannelId(channelId);
  }, []);

  const onChange = (newQuestion: string) => {
    setnewQuestion(newQuestion.trim());
  };

  const queryClient = useQueryClient();
  const { mutateAsync, isPending } = useMutation({
    mutationFn: async (data: NewQuestionParams) => {
      return questionService.create(data);
    },
  });

  const handleSubmit = async (data: NewQuestionParams) => {
    console.log("🚀 ~ handleSubmit ~ data:", data)
    try {
      await mutateAsync(data);

      queryClient.invalidateQueries({ queryKey: ["questions"] });
      toast.success("Pergunta criada com sucesso!");
      closeNewQuestionModal();
    } catch (error) {
      console.log("🚀 ~ handleSubmit ~ error:", error);
      toast.error("Erro ao criar pergunta!");
    }
  };

  return {
    handleSubmit,
    isPending,
    onChange,
    newQuestion,
  };
}
