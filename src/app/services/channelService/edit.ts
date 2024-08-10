import { httpClient } from "../httpClient";

export type ChannelUpdateParams = {
  newChannelName?: string;
  channelId: string;
};

export async function edit(params: ChannelUpdateParams) {
  console.log("🚀 ~ edit ~ params:", params)
  const { data } = await httpClient.put(`/canais/${params.channelId}`, {
    channel: params.newChannelName,
  });

  return data;
}
