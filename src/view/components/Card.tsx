interface CardProps {
  children: React.ReactNode;
  width: number
}

export function Card({ children, width }: CardProps) {
  return (
    <div
      className={`bg-slate-100  transition-all w-[${width}px] min-h-60 rounded-lg p-2 m-7 drop-shadow-2xl`}
    >
      {children}
    </div>
  );
}
//500