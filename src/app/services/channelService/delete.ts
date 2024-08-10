import { httpClient } from "../httpClient";

export async function deleteChannel(channelId: string) {
  console.log("🚀 ~ deleteChannel ~ VENDOR:", channelId)
  
  const { data } = await httpClient.delete(`/canais/${channelId}`);

  return data;
}
