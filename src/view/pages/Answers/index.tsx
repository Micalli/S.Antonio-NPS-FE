import {
  Pencil1Icon,
  Share2Icon,
  TrashIcon,
} from "@radix-ui/react-icons";
import { useParams } from "react-router-dom";
import { Tooltip } from "react-tooltip";
import { useDeleteAnswerModalController } from "./controllers/useDeleteAnswersModalController";
import { useUpdateAnswerModalController } from "./controllers/useUpdateChannelModalController";
import { useAnswersController } from "./controllers/useAnswersController";
import { Button } from "../../components/Button";
import { Title } from "../../components/Title";
import { PlusIcon } from "../../components/icons/Pluscon";
import { Card } from "../../components/Card";
import { NewAnswerModal } from "./NewQuestionModal";
import { useModals } from "../../../app/contexts/useModals";
import { Spinner } from "../../components/icons/Spinner";
import { DeleteAnswerModal } from "./DeleteQuestionModal";
import { ButtonBack } from "../../components/ButtonBack";
import { formatDate } from "../../../app/utils/formatDate";
import { UpdateAnswerModal } from "./UpdateAnswerModal";
import { NoItens } from '../../components/NoItens';

export function Answers() {
  const { questionId } = useParams();
  const {
    openNewAnswersModal,
    openDeleteAnswersModal,
    openUpdateAnswersModal,
  } = useModals();

  const { answers, isPending } = useAnswersController(questionId);

  const { handleDeletedAnswer, deletedAnswerId } =
    useDeleteAnswerModalController();

  const { handleUpdateChannel, updatedAnswerId } =
    useUpdateAnswerModalController();

  function openDeleteModal(answerId: string) {
    handleDeletedAnswer(answerId);
    openDeleteAnswersModal();
  }

  function openUpdateModal(answerId: string) {
    handleUpdateChannel(answerId);
    openUpdateAnswersModal();
  }
  return (
    <>
      <Title title="Respostas da pergunta:" />

      {/* <div className="flex justify-center text-xl">Pergunta 1</div> */}

      <div
        data-tooltip-id="my-tooltip"
        data-tooltip-content="Adicionar Resposta"
        className=" right-0 bottom-0 m-3 z-50 fixed"
      >
        <Button onClick={openNewAnswersModal}>
          <PlusIcon />
        </Button>
      </div>
      <Tooltip id="my-tooltip" className="z-10" />

      <ButtonBack />

      {answers.length === 0 && !isPending && (
       <NoItens itemType='respostas'/>
      )}
      {isPending && (
        <div className=" flex justify-center h-72  items-center">
          <Spinner classname="w-12 h-12" />
        </div>
      )}
      <div className=" grid grid-cols-1 lg:grid-cols-2  justify-items-center">
        {answers.map((answer) => (
          <Card
            width={525}
            className="min-w-[300px] flex flex-col justify-around"
            key={answer.id}
          >
            <div className=" flex justify-between mt-6 items-center">
              <div
                className="hover:bg-red-200  rounded-full transition-all cursor-pointer"
                onClick={() => openDeleteModal(answer.id)}
              >
                <TrashIcon className="w-11 h-11  p-3" />
              </div>
              <div>{<Share2Icon className="w-4 h-4" />}</div>

              <div
                className="hover:bg-slate-300   rounded-full  cursor-pointer "
                onClick={() => openUpdateModal(answer.id)}
              >
                <Pencil1Icon className="w-11 h-11  p-3" />
              </div>
            </div>

            <div className=" flex  mt-6 text-center text-lg">
              {answer.answer}
            </div>

            <div className=" flex justify-center mt-2 text-gray-400 text-xs ">
              Criado em {formatDate(answer.createdAt)}
            </div>
          </Card>
        ))}
      </div>
      <NewAnswerModal questionId={questionId} />
      <DeleteAnswerModal answerId={deletedAnswerId} />
      <UpdateAnswerModal answerId={updatedAnswerId} />
    </>
  );
}
