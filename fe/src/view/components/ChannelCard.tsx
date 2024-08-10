import { ChannelIcon } from './icons/Channelcon';
import {  TrashIcon, Pencil1Icon } from "@radix-ui/react-icons";

interface ChannelCardProps {
    nameChannel: string;
    lenghtQuestions: number;

}

export function ChannelCard({lenghtQuestions, nameChannel}: ChannelCardProps) {
  return (
    <div className="bg-slate-100 hover:bg-slate-200 transition-all w-60 h-60 max-w-64 rounded-lg p-2 m-7 drop-shadow-2xl cursor-pointer">
      <div className=" flex justify-center mt-6">{<ChannelIcon />}</div>

      <div className=" flex justify-center mt-6 font-bold text-4xl">
        {nameChannel}
      </div>
      <span className=" flex justify-center mt-6 text-gray-400 text-sm">
        {lenghtQuestions} perguntas
      </span>
      <div className=" flex justify-center mt-6 font-bold gap-8">
        <span className="hover:bg-red-200  rounded-full transition-all">
          <TrashIcon className="w-11 h-11  p-3 " />
        </span>
        <span className="hover:bg-slate-300   rounded-full">
          <Pencil1Icon className="w-11 h-11  p-3 " />
        </span>
      </div>
    </div>
  );
}