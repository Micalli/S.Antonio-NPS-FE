import { httpClient } from "../httpClient";

export type ChannelParams = {
  channel?: string;

}

export async function create(channel: string) {
  console.log("🚀 ~ create ~ params:", channel);
  const { data } = await httpClient.post("/canais", {channel});

  return data;
}
