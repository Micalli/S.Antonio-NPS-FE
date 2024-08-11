import { httpClient } from "../httpClient";

export type AnswerUpdateParams = {
  newAnswer?: string;
  answerId: string;
};

export async function edit({ answerId, newAnswer }: AnswerUpdateParams) {
  const { data } = await httpClient.put(`/respostas/${answerId}`, {
    answer: newAnswer,
  });

  return data;
}
