import { Routes, Route } from 'react-router-dom';
import Club from './club';
import DynamicState from "./dynamicState";
import Focus from "./focus";
import Inform from "./inform";
import Activities from './activities'
import App from './toast';
import List from './list';
import SearchPage from './searchPage';

export default function Routess(){
    return(
        <>
        <Routes>
                <Route path="/" element={<Inform />} />
                <Route path='/toast' element={<App />} />
                <Route path="/dynamicState" element={<DynamicState />}/>
                <Route path="/focus" element={<Focus/>}/>
                <Route path='/club/:id' element={<Club />}/>
                <Route path='/activities/:content' element={<Activities />} />
                <Route path='/list/:id' element={<List/>}/>
                <Route path='/search/:text' element={<SearchPage />}/>
        </Routes>
        </>
    )
}