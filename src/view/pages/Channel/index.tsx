import { useModals } from "../../../app/contexts/useModals";
import { Button } from "../../components/Button";
import { ChannelCard } from "../../components/ChannelCard";
import { Title } from "../../components/Title";
import { PlusIcon } from "../../components/icons/Pluscon";
import { Spinner } from "../../components/icons/Spinner";
import { NewChannelModal } from "./NewChannelModal";
import { Tooltip } from "react-tooltip";
import { useChannelController } from "./controllers/useChannelController";
import { DeleteChannelModal } from "./DeleteChannelModal";
import { useDeleteChannelModalController } from "./controllers/useDeleteChannelModalController";
import { Pencil1Icon, TrashIcon } from "@radix-ui/react-icons";
import { ChannelIcon } from "../../components/icons/Channelcon";
import { UpdateChannelModal } from "./UpdateChannelModal";
import { useUpdateChannelModalController } from "./controllers/useUpdateChannelModalController";
import { Link } from "react-router-dom";

export function Channel() {
  const { channels, isPending: isLoadingChannels } = useChannelController();
  const { openNewChannelModal, openDeleteChannelModal } = useModals();
  const { handleDeletedChannel, deletedChannel } =
    useDeleteChannelModalController();

  const { handleUpdateChannel, openUpdateChannelModal, deletedChannelId } =
    useUpdateChannelModalController();

  function openDeleteModal(channelId: string) {
    handleDeletedChannel(channelId);
    openDeleteChannelModal();
  }

  function openUpdateModal(channelId: string) {
    handleUpdateChannel(channelId);
    openUpdateChannelModal();
  }

  return (
    <>
      <Title title="Canais" />
      <div
        data-tooltip-id="my-tooltip"
        data-tooltip-content="Adicionar Canal"
        className=" right-0 bottom-0 m-3 z-50 fixed"
      >
        <Button onClick={openNewChannelModal}>
          <PlusIcon />
        </Button>
      </div>
      <Tooltip id="my-tooltip" className="z-10" />
      {channels.length === 0 && !isLoadingChannels && <div>não tem Canal</div>}
      {isLoadingChannels && (
        <div className=" flex justify-center h-72  items-center">
          <Spinner classname="w-12 h-12" />
        </div>
      )}
      {channels.length > 0 && !isLoadingChannels && (
        <div className=" grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 grid-rows-3  gap-6 justify-items-center">
          {channels.map((channel) => (
            <Link
              to={`/questions/${channel.id}`}
              className="tracking-[-0.5px] text-teal-900 font-medium"
            >
              <ChannelCard key={channel.id}>
                <div className=" flex justify-center mt-6">
                  {<ChannelIcon />}
                </div>

                <div className=" flex justify-center mt-6 font-bold text-4xl">
                  {channel.channel}
                </div>
                <span className=" flex justify-center mt-6 text-gray-400 text-sm">
                  {channel.Questions.length} perguntas
                </span>
                <div className=" flex justify-center mt-6 font-bold gap-8">
                  <span
                    className="hover:bg-red-200  rounded-full transition-all"
                    onClick={() => openDeleteModal(channel.id)}
                  >
                    <TrashIcon className="w-11 h-11  p-3" />
                  </span>

                  <span
                    className="hover:bg-slate-300   rounded-full  "
                    onClick={() => openUpdateModal(channel.id)}
                  >
                    <Pencil1Icon className="w-11 h-11  p-3" />
                  </span>
                </div>
              </ChannelCard>
            </Link>
          ))}
        </div>
      )}
      <DeleteChannelModal channelId={deletedChannel} />
      <UpdateChannelModal channelId={deletedChannelId} />

      <NewChannelModal />
    </>
  );
}
