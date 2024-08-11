import { Button } from '../../components/Button';
import { Title } from '../../components/Title';
import { Pencil1Icon, Share2Icon, TrashIcon} from "@radix-ui/react-icons";
import { PlusIcon } from '../../components/icons/Pluscon';
import { Tooltip } from "react-tooltip";
import { Card } from '../../components/Card';


export function Answers() {
    return (
      <>
        <Title title="Respostas da pergunta:" />

        <div className="flex justify-center text-xl">Pergunta 1</div>

        <div
          data-tooltip-id="my-tooltip"
          data-tooltip-content="Adicionar Resposta"
          className=" right-0 bottom-0 m-3 z-50 fixed"
        >
          <Button
          //   onClick={openNewChannelModal}
          >
            <PlusIcon />
          </Button>
        </div>
        <Tooltip id="my-tooltip" className="z-10" />
        <div className=" grid grid-cols-1 lg:grid-cols-2  justify-items-center">
          <Card width={525}>
            <div className=" flex justify-between mt-6 items-center">
              <div
                className="hover:bg-red-200  rounded-full transition-all cursor-pointer"
                //   onClick={() => openUpdateModal(quest.id)}
              >
                <TrashIcon className="w-11 h-11  p-3" />
              </div>
              <div>{<Share2Icon className="w-4 h-4" />}</div>

              <div
                className="hover:bg-slate-300   rounded-full  cursor-pointer "
                // onClick={() => openUpdateModal(channel.id)}
              >
                <Pencil1Icon className="w-11 h-11  p-3" />
              </div>
            </div>

            <div className=" flex  mt-6 text-center  text-lg">
              Resposta 1 Resposta 1 Resposta 1 Resposta 1 Resposta 1 Resposta 1
              Resposta 1Resposta 1 Resposta 1 Resposta 1 Resposta 1
            </div>
          </Card>
        </div>
      </>
    );
}