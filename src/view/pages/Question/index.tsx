import { useParams } from "react-router-dom";
import { QuestionMarkCircledIcon } from "@radix-ui/react-icons";
import { Title } from "../../components/Title";
import { Button } from "../../components/Button";
import { QuestionCard } from '../../components/QuestionCard';
import { useQuestionController } from './controllers/useQuestionController';
import { formatDate } from '../../../app/utils/formatDate';
import { Spinner } from '../../components/icons/Spinner';
import { PlusIcon } from '../../components/icons/Pluscon';
import { Tooltip } from "react-tooltip";

const grades = [0,1,2, 3, 4, 5, 6, 7, 8, 9, 10];

export function Question() {
  const { channelId } = useParams();
  const { questions, isPending } = useQuestionController(channelId);
  console.log("🚀 ~ Question ~ questions:", questions)

 
  return (
    <>
      <Title title="Canais" />

      <div
        data-tooltip-id="my-tooltip"
        data-tooltip-content="Adicionar Pergunta"
        className=" right-0 bottom-0 m-3 z-50 fixed"
      >
        <Button 
        // onClick={openNewChannelModal}
        >
          <PlusIcon />
        </Button>
      </div>
      <Tooltip id="my-tooltip" className="z-10" />

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
          <QuestionCard>
            <div className=" flex justify-center mt-6">
              {<QuestionMarkCircledIcon />}
            </div>
            <div className=" flex justify-center mt-6 font-bold text-lg">
              {quest.question}
            </div>
            <div className=" flex justify-center mt-6 gap-3">
              {grades.map((grade) => (
                <Button className="px-3 h-8">{grade}</Button>
              ))}
            </div>
            <span className=" flex justify-center mt-2 text-gray-400 text-xs">
              Avalie
            </span>
            <div className=" flex justify-between mt-10 text-gray-400 text-xs">
              <span>{quest.Answers.length} respostas</span>
              <span>Criada em {formatDate(quest.createdAt)}</span>
            </div>
          </QuestionCard>
        ))}
      </div>
    </>
  );
}
