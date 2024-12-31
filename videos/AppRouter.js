import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Email from './email';

function AppRouter() {
    console.log("AppRouter rendering");
    
    return (
        <BrowserRouter>
            <div style={{padding: "20px"}}>
                <Routes>
                    <Route path="/" element={<Email />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default AppRouter;