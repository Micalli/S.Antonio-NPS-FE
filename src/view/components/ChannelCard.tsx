import { Navigate } from 'react-router-dom';

interface ChannelCardProps {
  children: React.ReactNode;
  channelIn:string
}

export function ChannelCard({ children, channelIn }: ChannelCardProps) {
  const navigateToQuestions = (channelId:string) => {
    console.log("🚀 ~ navigateToQuestions ~ channelId:", channelId)
    return <Navigate to={`/questions` } />;
  }
  return (
    <div className="bg-slate-100 hover:bg-slate-200 transition-all w-60 h-60 max-w-64 rounded-lg p-2 m-7 drop-shadow-2xl cursor-pointer"onClick={() => navigateToQuestions(channelIn)}>
      {children}
    </div>
  );
}
