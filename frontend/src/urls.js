import { Routes,Route,BrowserRouter } from "react-router-dom"
import App from "./App";
import Mainwatches from "./mainwatches";
import Watchesopen from "./watchesopen";
import Womens from "./women";
import Mens from "./mens";
import Womensopen from "./womensopen";
import Login from "./login";
import Mainlogin from "./mainlogin";
import Profile from "./profile";
import Cart from "./cart";
import Chatbot from "./chatbot";
function Urls(){

    return(
        <BrowserRouter>
        <Routes>
<Route path="/" element={<App/>}/>
<Route path="/main1" element={<Mainwatches/>}/>
<Route path='/open1/:id' element={<Watchesopen/>}/>
<Route path='/women' element={<Womens/>}/>
<Route path='/men' element={<Mens/>}/>
<Route path='/womensop/:id' element={<Womensopen/>}/>
<Route path='/sighnup' element={<Login/>}/>
<Route path='/login/' element={<Mainlogin/>}/>
<Route path='/profile'element={<Profile/>}/>
<Route path='/cart'element={<Cart/>}/>
<Route path='/chatbot'element={<Chatbot/>}/>
        </Routes>
        </BrowserRouter>
    )
}
export default Urls