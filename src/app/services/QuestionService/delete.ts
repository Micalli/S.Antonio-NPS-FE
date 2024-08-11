import { httpClient } from "../httpClient";

export async function deleteQuestion(questionId: string) {
  console.log("🚀 ~ deleteQuestion ~ VENDOR:", questionId);
  
  const { data } = await httpClient.delete(`/perguntas/${questionId}`);

  return data;
}
