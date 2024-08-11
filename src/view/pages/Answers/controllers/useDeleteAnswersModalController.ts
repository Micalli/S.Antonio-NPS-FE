import { useMutation, useQueryClient } from "@tanstack/react-query";

import toast from "react-hot-toast";
import { useCallback, useState } from "react";
import { useModals } from '../../../../app/contexts/useModals';
import { answerService } from '../../../../app/services/AnswerService';

export function useDeleteAnswerModalController() {
  const [deletedAnswerId, setDeletedAnswerId] = useState<any>();
  const { closeDeleteAnswersModal,  } = useModals();

   const handleDeletedAnswer = useCallback((questionId:string) => {
     setDeletedAnswerId(questionId);
   }, []);
  
  const queryClient = useQueryClient();
  const { mutateAsync, isPending } = useMutation({
    mutationFn: async (answerId: string) => {
      return answerService.deleteQuestion(answerId);
    },
  });

   const handleSubmit = async (answerId: string) => {
     try {
       await mutateAsync(answerId);
       queryClient.invalidateQueries({ queryKey: ["answers"] });
       toast.success("Resposta deletado com sucesso!");
       closeDeleteAnswersModal();
     } catch (error) {
       console.log("🚀 ~ handleSubmit ~ error:", error);
       toast.error("Erro ao deletar o resposta!");
     }
   };
 

  return {
    isPending,
    deletedAnswerId,
    handleSubmit,
    handleDeletedAnswer,
  };
}
