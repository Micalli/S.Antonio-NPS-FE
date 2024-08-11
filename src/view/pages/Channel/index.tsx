import { useModals } from "../../../app/contexts/useModals";
import { Button } from "../../components/Button";
import { Title } from "../../components/Title";
import { PlusIcon } from "../../components/icons/Pluscon";
import { Spinner } from "../../components/icons/Spinner";
import { NewChannelModal } from "./NewChannelModal";
import { Tooltip } from "react-tooltip";
import { useChannelController } from "./controllers/useChannelController";
import { DeleteChannelModal } from "./DeleteChannelModal";
import { useDeleteChannelModalController } from "./controllers/useDeleteChannelModalController";
import { Pencil1Icon, TrashIcon, EnterIcon } from "@radix-ui/react-icons";
import { ChannelIcon } from "../../components/icons/Channelcon";
import { UpdateChannelModal } from "./UpdateChannelModal";
import { useUpdateChannelModalController } from "./controllers/useUpdateChannelModalController";
import { Link } from "react-router-dom";
import { Card } from '../../components/Card';
import { ButtonBack } from '../../components/ButtonBack';

export function Channel() {
  const { channels, isPending: isLoadingChannels } = useChannelController();
  const {
    openNewChannelModal,
    openDeleteChannelModal,
    openUpdateChannelModal,
  } = useModals();
  const { handleDeletedChannel, deletedChannel } =
    useDeleteChannelModalController();

  const { handleUpdateChannel, updatedChannelId } =
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
      <ButtonBack />
      {channels.length === 0 && !isLoadingChannels && <div>não tem Canal</div>}
      {isLoadingChannels && (
        <div className=" flex justify-center h-72  items-center">
          <Spinner classname="w-12 h-12" />
        </div>
      )}
      {channels.length > 0 && !isLoadingChannels && (
        <div className=" grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 grid-rows-3  gap-6 justify-items-center">
          {channels.map((channel) => (
            <Card width={60} key={channel.id}>
              <div className=" flex justify-center mt-6 items-center">
                <ChannelIcon />
              </div>

              <div className=" flex justify-center mt-6 font-bold text-4xl">
                {channel.channel}
              </div>
              <span className=" flex justify-center mt-6 text-gray-400 text-sm">
                {channel.Questions.length} perguntas
              </span>
              <div className=" flex justify-center mt-6 font-bold gap-10  border-t-2 border-gray-200 pt-2">
                <span
                  className="hover:bg-red-200  rounded-full transition-all cursor-pointer"
                  onClick={() => openDeleteModal(channel.id)}
                >
                  <TrashIcon className="w-11 h-11  p-3" />
                </span>

                <span
                  className="hover:bg-slate-300   rounded-full cursor-pointer  "
                  onClick={() => openUpdateModal(channel.id)}
                >
                  <Pencil1Icon className="w-11 h-11  p-3" />
                </span>
                <Link
                  to={`/questions/${channel.id}`}
                  className="hover:bg-slate-300   rounded-full  "
                >
                  <span>
                    <EnterIcon className="w-11 h-11  p-3" />
                  </span>
                </Link>
              </div>
            </Card>
          ))}
        </div>
      )}
      <DeleteChannelModal channelId={deletedChannel} />
      <UpdateChannelModal channelId={updatedChannelId} />

      <NewChannelModal />
    </>
  );
}
