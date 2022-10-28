import {HashRouter, Route, Routes} from "react-router-dom";
import Home from "./components/core/Home";
import Shop from "./components/core/Shop";

const RouteMaster = () => {
    return (
        <HashRouter>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/shop" element={<Shop/>}/>
            </Routes>
        </HashRouter>
    )
}
export default RouteMaster;