import { ChevronLeftIcon } from "@radix-ui/react-icons";
import { Tooltip } from "react-tooltip";
import { useNavigate } from "react-router-dom";

export function ButtonBack() {
  const navigate = useNavigate();
  return (
    <>
      <div
        data-tooltip-id="my-tooltip"
        data-tooltip-content="Voltar"
        className=" left-0 top-24 m-3 z-50 absolute"
      >
        <ChevronLeftIcon
          onClick={() => navigate(-1)}
          className=" w-7 h-7 cursor-pointer"
        />
      </div>
      <Tooltip id="my-tooltip" className="z-10" />
    </>
  );
}
