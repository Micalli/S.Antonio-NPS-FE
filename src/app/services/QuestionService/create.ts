import { httpClient } from "../httpClient";
export type NewQuestionParams = {
  newQuestion?: string;
  channelId?: string;
};

export async function create({ channelId, newQuestion }: NewQuestionParams) {
  const { data } = await httpClient.post(`/perguntas/`, {
    question: newQuestion,
    channelId,
  });

  return data;
}
