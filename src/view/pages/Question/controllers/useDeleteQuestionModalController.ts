import { useMutation, useQueryClient } from "@tanstack/react-query";

import toast from "react-hot-toast";
import { useCallback, useState } from "react";
import { useModals } from '../../../../app/contexts/useModals';
import { questionService } from '../../../../app/services/QuestionService';

export function useDeleteQuestionModalController() {
  const [deletedQuestionId, setDeletedQuestionId] = useState<any>();
  const { closeDeleteQuestionModal,  } = useModals();



   const handleDeletedQuestion = useCallback((questionId:string) => {
     setDeletedQuestionId(questionId);
   }, []);
  


  const queryClient = useQueryClient();
  const { mutateAsync, isPending } = useMutation({
    mutationFn: async (questionId: string) => {
      return questionService.deleteQuestion(questionId);
    },
  });

   const handleSubmit = async (questionId: string) => {
     try {
       await mutateAsync(questionId);
       queryClient.invalidateQueries({ queryKey: ["questions"] });
       toast.success("Canal deletado com sucesso!");
       closeDeleteQuestionModal();
     } catch (error) {
       console.log("🚀 ~ handleSubmit ~ error:", error);
       toast.error("Erro ao deletar o pergunta!");
     }
   };
 

  return {
    isPending,
    deletedQuestionId,
    handleSubmit,
    handleDeletedQuestion,
  };
}
