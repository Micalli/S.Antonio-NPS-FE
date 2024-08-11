import { Route, Routes, BrowserRouter } from "react-router-dom";
import { Header } from '../view/components/Header';
import { Channel } from '../view/pages/Channel';
import { Question } from '../view/pages/Question';
import { Answers } from '../view/pages/Answers';



export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Header />}>
          <Route path="/channels" element={<Channel />} />
          <Route path="/questions/:channelId" element={<Question />} />
          <Route path="/answers/:questionId" element={<Answers />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
