import { httpClient } from "../httpClient";
export type NewAnswerParams = {
  answer?: string;
  questionId?: string;
};

export async function create({ answer, questionId }: NewAnswerParams) {
  const { data } = await httpClient.post(`/respostas/`, {
    answer,
    questionId,
  });

  return data;
}
