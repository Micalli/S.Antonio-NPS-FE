import { httpClient } from "../httpClient";

type AnswerResponse = [
  {
    id: string;
    createdAt: Date;
    updatedAt: Date;
    answer: string;
    questionId: string;
  }
];

export async function getAll(questionId?: string) {
  const { data } = await httpClient.get<AnswerResponse>(
    `/respostas/${questionId}`
  );

  return data;
}
