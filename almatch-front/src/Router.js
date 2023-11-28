// src/Router.js
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from '../src/pages/mainPage/main';
import SignIn from '../src/pages/RegPage';
import Login from '../src/pages/LoginPage';
import MyPage from '../src/pages/myPage/myPage';
import Cart from '../src/pages/cartPage/cart';
import ItemBoard from '../src/pages/itemBoardPage/itemList';
import ItemDetail from '../src/pages/itemDetailPage/itemDetail';

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<SignIn />} />
                <Route path="/login" element={<Login />} />
                <Route path="/main" element={<Main />} />
                <Route path="/itemBoard" element={<ItemBoard />} />
                <Route path="/itemBoard/:foodId" element={<ItemDetail />} />
                <Route path="/myPage" element={<MyPage />} />
                <Route path="/cart" element={<Cart />} />
            </Routes>
        </BrowserRouter>
    );
};

export default Router;
