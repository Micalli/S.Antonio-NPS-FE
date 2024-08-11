import { useMutation, useQueryClient } from "@tanstack/react-query";

import toast from "react-hot-toast";
import { useCallback, useState } from "react";
import { useModals } from "../../../../app/contexts/useModals";
import { QuestionUpdateParams } from '../../../../app/services/QuestionService/edit';
import { questionService } from '../../../../app/services/QuestionService';

export function useUpdateQuestionModalController() {
  const [newQuestion, setNewQuestion] = useState<any>();
  const [updatedQuestionId, setUpdatedQuestionId] = useState<any>();

  const {
    closeUpdateQuestionModal
  } = useModals();

  const handleUpdateQuestion = useCallback((updatedQuestion: string) => {
    setUpdatedQuestionId(updatedQuestion);
  }, []);

  const onChange = (newQuestion: string) => {
    setNewQuestion(newQuestion.trim());
  };

  const queryClient = useQueryClient();
  const { mutateAsync, isPending } = useMutation({
    mutationFn: async (data: QuestionUpdateParams) => {
      return  questionService.edit(data)
    },
  });

  const handleSubmit = async (data: QuestionUpdateParams) => {
    try {
      await mutateAsync(data);

      queryClient.invalidateQueries({ queryKey: ["questions"] });
      toast.success("Pergunta editado com sucesso!");
      closeUpdateQuestionModal();
    } catch (error) {
      console.log("🚀 ~ handleSubmit ~ error:", error);
      toast.error("Erro ao editar o Pergunta!");
    }
  };

  return {
    isPending,
    handleUpdateQuestion,
    newQuestion,
    updatedQuestionId,
    handleSubmit,
    onChange,
  };
}
