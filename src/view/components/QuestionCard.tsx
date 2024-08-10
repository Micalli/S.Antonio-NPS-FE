interface QuestionsCardProps {
  children: React.ReactNode;
}

export function QuestionCard({ children }: QuestionsCardProps) {
  return (
    <div className="bg-slate-100  transition-all w-[500px] h-60  rounded-lg p-2 m-7 drop-shadow-2xl ">
      {children}
    </div>
  );
}
