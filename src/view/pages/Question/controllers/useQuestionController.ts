import { useQuery } from "@tanstack/react-query";
import { questionService } from "../../../../app/services/QuestionService";

export function useQuestionController(channelId: string | undefined) {
  const { data, isPending } = useQuery({
    queryKey: ["questions"],
    queryFn: async () => {
      const data = await questionService.getAll(channelId);
      return data;
    },
  });

  return {
    questions: data ?? [],
    isPending,
  };
}
