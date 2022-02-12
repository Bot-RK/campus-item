import { Routes, Route } from 'react-router-dom';
import Club from './club';
import DynamicState from "./dynamicState";
import Focus from "./focus";
import Inform from "./inform";
export default function Routess(){
    return(
        <>
        <Routes>
            <Route path="/" element={<Inform />}/>
            <Route path="/dynamicState" element={<DynamicState />}/>
            <Route path="/focus" element={<Focus/>}/>
            <Route path='/club/:id' element={<Club />}/>
            <Route path='/activities/:id' element={<Club />}/>
        </Routes>
        </>
    )
}