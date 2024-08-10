import { httpClient } from "../httpClient";

type ChannelResponse = {
  id: string;
  channel: string;
  Questions: [
    {
      id: string;
      channelId: string;
      createdAt: Date;
      updatedAt: Date;
      question: string;
      note: string;
      grade: number;
    }
  ];
}[]

export async function getAll() {
  const { data } = await httpClient.get<ChannelResponse>("/canais");

  return data ;
}
