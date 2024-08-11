import { httpClient } from "../httpClient";

export type QuestionUpdateParams = {
  newQuestion?: string;
  questionId: string;
};

export async function edit({ questionId, newQuestion }: QuestionUpdateParams) {
  const { data } = await httpClient.put(`/perguntas/${questionId}`, {
    question: newQuestion,
  });

  return data;
}
