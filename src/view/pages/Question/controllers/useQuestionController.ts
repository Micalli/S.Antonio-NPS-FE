import { useQuery } from "@tanstack/react-query";
import { questionService } from '../../../../app/services/QuestionService';

export function useQuestionController(channeId: string | undefined) {
  const { data, isPending } = useQuery({
    queryKey: ["channels"],
    queryFn: async () => {
      const data = await questionService.getAll(channeId);
      return data;
    },
    
    
  });
  return {
    questions: data ?? [],
    isPending,
  };
}
