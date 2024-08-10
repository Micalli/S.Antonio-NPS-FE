interface TitleProps {
  title: string;
}
export function Title({ title }: TitleProps) {
  return (
    <div className=" justify-center text-center text-black mb-6">
      <h1 className="p-12 text-3xl font-bold">{title}</h1>
    </div>
  );
}
