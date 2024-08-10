import { channelService } from "../../../app/services/channelService";
import { useQuery } from "@tanstack/react-query";

export function useChannelController() {
  const { data, isPending } = useQuery({
    queryKey: ["channels"],
    queryFn: channelService.getAll,
  });
  return {
    channels: data ?? [],
    isPending,
  };
}
