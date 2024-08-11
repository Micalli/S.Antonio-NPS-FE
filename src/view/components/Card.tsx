import { cn } from "../../app/utils/cn";

interface CardProps {
  children: React.ReactNode;
  width: number;
  className?: string;
}

export function Card({ children, width, className }: CardProps) {
  return (
    <div
      className={cn(
        `bg-slate-100  transition-all w-[${width}px] min-h-60 rounded-lg p-2 m-7 drop-shadow-2xl`,
        className
      )}
    >
      {children}
    </div>
  );
}
//500
