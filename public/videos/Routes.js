import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Email from './email';
import App from './App';
import IrrelevantQuestion from "./irrelevantquestion";
import Video from "./video";
import ImpQuestion from './impquestion';

function AppRoutes() {

  return (
    <Routes>
      <Route path="/" element={<Email />} />
      <Route path="/app" element={<App />} />
      <Route path = "/question" element = {<IrrelevantQuestion />} />
      <Route path="/success" element={<div>She said YES! 🎉</div>} />
      <Route path = "/video" element= {<Video />} />
      <Route path = "/notsoimpquestion" element = {<ImpQuestion />} />
    </Routes>
  );
}

export default AppRoutes;