import {Route, Routes} from 'react-router-dom';
import Home from "../pages/home.tsx";




const WebRouter = () => {

    return (
        <Routes>
            <Route path={'/'} element={<Home/>}/>
        </Routes>
    );
};

export default WebRouter;