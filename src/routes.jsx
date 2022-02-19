import { Routes, Route } from 'react-router-dom';
import Club from './club';
import DynamicState from "./dynamicState";
import Focus from "./focus";
import Inform from "./inform";
<<<<<<< HEAD
import Activities from './activities'
import App from './toast';
import List from './list';
import SearchPage from './searchPage';
import Ceshi from './ceshi';

=======
>>>>>>> 5ca6e9e84bd8e4cae10606bf3e56418ec2dd1cce
export default function Routess(){
    return(
        <>
        <Routes>
<<<<<<< HEAD
                <Route path="/" element={<Inform />} />
                <Route path='/toast' element={<Ceshi />} />
                <Route path="/dynamicState" element={<DynamicState />}/>
                <Route path="/focus" element={<Focus/>}/>
                <Route path='/club/:id' element={<Club />}/>
                <Route path='/activities/:id' element={<Activities />} />
                <Route path='/list/:id' element={<List/>}/>
                <Route path='/search/:text' element={<SearchPage />}/>
=======
            <Route path="/" element={<Inform />}/>
            <Route path="/dynamicState" element={<DynamicState />}/>
            <Route path="/focus" element={<Focus/>}/>
            <Route path='/club/:id' element={<Club />}/>
            <Route path='/activities/:id' element={<Club />}/>
>>>>>>> 5ca6e9e84bd8e4cae10606bf3e56418ec2dd1cce
        </Routes>
        </>
    )
}