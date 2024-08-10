import { Route, Routes, BrowserRouter } from "react-router-dom";
import { Header } from '../view/components/Header';
import { Channel } from '../view/pages/Channel';
import { Question } from '../view/pages/Question';



export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Header />}>
          <Route path="/channels" element={<Channel />} />
          <Route path="/questions/:channelId" element={<Question />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
