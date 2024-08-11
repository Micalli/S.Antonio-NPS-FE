import { httpClient } from "../httpClient";
export type RateQuestionParams = {
  questionId?: string;
  grade?: number;
  note?: string;
};

export async function rate({grade, note, questionId}: RateQuestionParams) {

  const { data } = await httpClient.put(
    `/perguntas/avaliar/${questionId}`,
    {
      note,
      grade,
    }
  );

  return data;
}
