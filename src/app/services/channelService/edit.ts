import { httpClient } from "../httpClient";

export type ChannelUpdateParams = {
  newChannelName?: string;
  channelId: string;
};

export async function edit({ channelId, newChannelName }: ChannelUpdateParams) {
  const { data } = await httpClient.put(`/canais/${channelId}`, {
    channel: newChannelName,
  });

  return data;
}
