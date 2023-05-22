import Contacts from "../Contacts/Contacts";
import Header from "../Header/Header";
import Qest from "../Qest/Qest";
import StartePage from "../Starte/StartePage"
import NotFound  from "../NotFound/NotFound";
import React from "react";
import { BrowserRouter, Route, Routes, Link, useParams } from 'react-router-dom';
import Beginners from "../Beginners/Beginners";
import Reviews from "../Reviews/Reviews";
import Shares from "../Shares/Shares";
import Qests from "../Qests/Qests";



function Wrapp () {
    return(
        <div className="wrapper">
            
            <BrowserRouter>
            <Header/>
                <Routes>
                    <Route path="/" element={<StartePage/>} errorElement= {<NotFound />}>
                        <Route path="/:url" element={<Qests/>}/>
                    </Route>
                    <Route path="qests/:id" element={<Qest/>}/>
                    <Route path="/beginners" element={<Beginners/>}/>
                    <Route path="/reviews" element={<Reviews/>}/>
                    <Route path="/shares" element={<Shares/>}/>
                    <Route path="/contacts" element={<Contacts/>}/>
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}
export default Wrapp