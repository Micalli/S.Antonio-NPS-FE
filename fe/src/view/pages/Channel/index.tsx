import { useModals } from '../../../app/contexts/useModals';
import { Button } from '../../components/Button';
import { ChannelCard } from "../../components/ChannelCard";
import { Title } from "../../components/Title";
import { PlusIcon } from '../../components/icons/Pluscon';
import { Spinner } from "../../components/icons/Spinner";
import { useChannelController } from "./useChannelController";
import { Tooltip } from "react-tooltip";

export function Channel() {
  const { channels, isPending } = useChannelController();
  const {  openNewChannelModal, isNewChannelModalOpen} = useModals();
  console.log("🚀 ~ Channel ~ isNewChannelModalOpen:", isNewChannelModalOpen)

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
      <Tooltip id="my-tooltip" className='z-10' />

      {channels.length === 0 && !isPending && <div>não tem Canal</div>}
      {isPending && (
        <div className=" flex justify-center h-72  items-center">
          <Spinner classname="w-12 h-12" />
        </div>
      )}

      {channels.length > 0 && !isPending && (
        <div className=" grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 grid-rows-3 w-full h-full gap-6 justify-items-center">
          {channels.map((channel) => (
            <ChannelCard
              key={channel.id}
              nameChannel={channel.channel}
              lenghtQuestions={channel.Questions.length}
            />
          ))}
        </div>
      )}
    </>
  );
}
