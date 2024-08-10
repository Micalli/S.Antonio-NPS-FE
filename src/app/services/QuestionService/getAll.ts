import { httpClient } from "../httpClient";

type QuestionResponse = {
  id: string;
  channelId: string;
  createdAt: Date;
  updatedAt: Date;
  question: string;
  note: string;
  grade: number;
  Answers: [
    {
      id: string;
      createdAt: string;
      updatedAt: string;
      answer: string;
      questionId: string;
    }
  ];
}[];

export async function getAll(channeId?: string) {
  const { data } = await httpClient.get<QuestionResponse>(
    `/perguntas/${channeId}`
  );

  return data;
}
