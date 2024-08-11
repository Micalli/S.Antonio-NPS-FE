import { useQuery } from "@tanstack/react-query";
import { channelService } from '../../../../app/services/ChannelService';

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
