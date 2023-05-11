import React from "react";
import { Routes, Route } from "react-router-dom";

import PM from "../routes/PM";
import Music from "../routes/Music";
import Media from "../routes/Media";
import Profile from "../routes/Profile";
import Auth from "../routes/Auth";


const AppRouter = ({ isLoggedIn, userObj, refreshUser }) => {
  return (
    <Routes>
      {!isLoggedIn ? (
        <>
          <Route path="/" element={<Auth />} />
        </>
      ) : (
        <>
          <Route path="/" element={<PM />} />
          <Route path="/Music" element={<Music />} />
          <Route path="/Media" element={<Media />} />
          <Route path="/Profile" element={<Profile />} />
        </>
      )}
    </Routes>
  );
};

export default AppRouter;