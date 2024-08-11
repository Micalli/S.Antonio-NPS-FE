import { useQuery } from "@tanstack/react-query";
import { answerService } from '../../../../app/services/AnswerService';

export function useAnswersController(questionId: string | undefined) {
  const { data, isPending } = useQuery({
    queryKey: ["answers"],
    queryFn: async () => {
      const data = await answerService.getAll(questionId);
      return data;
    },
  });
  return {
    answers: data ?? [],
    isPending,
  };
}
