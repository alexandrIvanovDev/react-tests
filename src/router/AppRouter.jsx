import React from 'react';
import {Route, Routes} from 'react-router-dom';
import {MainPage} from '../pages/MainPage';
import {AboutPage} from '../pages/AboutPage';
import {Users} from '../users/Users';
import {UserDetails} from '../pages/UserDetails';
import {NotFoundPage} from '../pages/NotFoundPage';
import {HelloWorld} from '../pages/HelloWorld';

export const AppRouter = () => {
    return (
        <Routes>
            <Route path='/' element={<MainPage/>}/>
            <Route path='/about' element={<AboutPage/>}/>
            <Route path='/hello' element={<HelloWorld/>}/>
            <Route path='/users' element={<Users/>}/>
            <Route path='/users/:id' element={<UserDetails/>}/>
            <Route path='/*' element={<NotFoundPage/>}/>
        </Routes>
    );
};