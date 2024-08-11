import { httpClient } from "../httpClient";

export async function deleteChannel(channelId: string) {
  
  const { data } = await httpClient.delete(`/canais/${channelId}`);

  return data;
}
