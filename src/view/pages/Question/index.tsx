import { Link, useParams } from "react-router-dom";
import {
  Pencil1Icon,
  QuestionMarkCircledIcon,
  TrashIcon,
} from "@radix-ui/react-icons";
import { Title } from "../../components/Title";
import { Button } from "../../components/Button";
import { useQuestionController } from "./controllers/useQuestionController";
import { formatDate } from "../../../app/utils/formatDate";
import { Spinner } from "../../components/icons/Spinner";
import { PlusIcon } from "../../components/icons/Pluscon";
import { Tooltip } from "react-tooltip";
import { useModals } from "../../../app/contexts/useModals";
import { NewQuestionModal } from "./NewQuestionModal";
import { DeleteQuestionModal } from "./DeleteQuestionModal";
import { useDeleteQuestionModalController } from "./controllers/useDeleteQuestionModalController";
import { FeedBackQuestionModal } from "./FeedBackQuestionModal";
import { useFeedbackQuestionModalController } from "./controllers/useFeedbackQuestionModalController";
import { Card } from '../../components/Card';
import { ButtonBack } from '../../components/ButtonBack';
import { UpdateQuestionModal } from './UpdateQuestionModal';
import { useUpdateQuestionModalController } from './controllers/useUpdateChannelModalController';

const grades = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

export function Question() {
  const { channelId } = useParams();
  const {
    openNewQuestionModal,
    openDeleteQuestionModal,
    openFeedbackQuestionModal,
    openUpdateQuestionModal
  } = useModals();

  const { questions, isPending } = useQuestionController(channelId);

  const { deletedQuestionId, handleDeletedQuestion } =
    useDeleteQuestionModalController();

    const { updatedQuestionId, handleUpdateQuestion } = useUpdateQuestionModalController();

  const {
    ratedQuestionId,
    rateAQuestion,
    gradedQuestion,
    handleFeedbackQuestion,
  } = useFeedbackQuestionModalController();

  function openDeleteModal(channelId: string) {
    handleDeletedQuestion(channelId);
    openDeleteQuestionModal();
  }

  function openUpdateModal(questionId: string) {
    handleUpdateQuestion(questionId);
    openUpdateQuestionModal();
  }

  function handleRatedQuestionByGrade(
    grade: number,
    note: string | undefined,
    questionId: string
  ) {
    if (grade <= 6) {
      handleFeedbackQuestion(questionId, grade);
      openFeedbackQuestionModal();
      return;
    }
    rateAQuestion({
      grade,
      note,
      questionId,
    });
  }

  return (
    <>
      <Title title="Canais" />
      <div
        data-tooltip-id="my-tooltip"
        data-tooltip-content="Adicionar Pergunta"
        className=" right-0 bottom-0 m-3 z-50 fixed"
      >
        <Button onClick={openNewQuestionModal}>
          <PlusIcon />
        </Button>
      </div>
      <Tooltip id="my-tooltip" className="z-10" />
      <ButtonBack />
      {questions.length === 0 && !isPending && (
        <div>Não foi encontrado perguntas</div>
      )}
      {isPending && (
        <div className=" flex justify-center h-72  items-center">
          <Spinner classname="w-12 h-12" />
        </div>
      )}
      <div className=" grid grid-cols-1 lg:grid-cols-2  justify-items-center">
        {questions.map((quest) => (
          <Card width={500} key={quest.id}>
            <div className=" flex justify-between mt-6 items-center">
              <div
                className="hover:bg-red-200  rounded-full transition-all cursor-pointer"
                onClick={() => openDeleteModal(quest.id)}
              >
                <TrashIcon className="w-11 h-11  p-3" />
              </div>
              <div>{<QuestionMarkCircledIcon />}</div>

              <div
                className="hover:bg-slate-300   rounded-full  cursor-pointer "
                onClick={() => openUpdateModal(quest.id)}
              >
                <Pencil1Icon className="w-11 h-11  p-3" />
              </div>
            </div>
            <div className=" flex justify-center mt-6 font-bold text-lg">
              {quest.question}
            </div>
            <div className=" flex justify-center mt-6 gap-3">
              {grades.map((grade) => (
                <Button
                  className="px-3 h-8"
                  onClick={() =>
                    handleRatedQuestionByGrade(grade, undefined, quest.id)
                  }
                  disabled={!!quest.grade}
                >
                  {grade}
                </Button>
              ))}
            </div>
            <span className=" flex justify-center mt-2 text-gray-400 text-xs">
              {!quest.grade ? "Avalie." : "Já avaliado."}
            </span>
            <div className=" flex justify-between mt-2 text-gray-400 text-xs">
              <Link to={`/answers/${quest.id}`} className=" ">
                <span className="underline cursor-pointer hover:text-black hover:font-semibold transition-all">
                  {quest.Answers.length} respostas
                </span>
              </Link>

              <span>Criada em {formatDate(quest.createdAt)}</span>
            </div>
          </Card>
        ))}
      </div>
      <DeleteQuestionModal questionId={deletedQuestionId} />
      <NewQuestionModal channelId={channelId} />
      <UpdateQuestionModal questionId={updatedQuestionId} />

      <FeedBackQuestionModal
        questionId={ratedQuestionId}
        gradedQuestion={gradedQuestion}
      />
    </>
  );
}
