import {HashRouter, Route, Routes} from 'react-router-dom';
import Home from "../pages/home.tsx";

const WebRouter = () => {

  return (
    <HashRouter>
      <Routes>
        <Route path={'/'} element={<Home/>}/>
      </Routes>
    </HashRouter>
  );
};

export default WebRouter;