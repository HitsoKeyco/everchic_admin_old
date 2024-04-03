import { Route, Routes } from 'react-router-dom';
import React, { useState } from 'react';
import HomePage from '../page/HomePage';
import ContactPage from '../page/ContactPage';
import OrderPage from '../page/OrderPage';
import FinancePage from '../page/FinancePage';
import InventoryPage from '../page/InventoryPage';
import ChatPage from '../page/ChatPage';
import Header from '../shared/Header';


const Links = () => {
    


    return (
        <>  
        
            <Header />
        
        
            <Routes>                
                <Route path='home' element={<HomePage/>}/>
                <Route path='contacts' element={<ContactPage/>}/>                
                <Route path='orders' element={<OrderPage/>}/>
                <Route path='finance' element={<FinancePage/>}/>
                <Route path='inventory' element={<InventoryPage/>}/>
                <Route path='chat' element={<ChatPage/>}/>
            </Routes>
        </>
    );
};

export default Links;