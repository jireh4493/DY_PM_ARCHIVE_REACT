import React, { useEffect, useState } from "react";
import { authService } from "../fbase";
import { onAuthStateChanged, updateProfile } from "firebase/auth";
import AppRouter from "./Router";

function App() {
  const [init, setInit] = useState(false);
  const [userObj, setUserObj] = useState(null);
  useEffect(() => {
    onAuthStateChanged(authService, (user) => {
      if (user) {
        setUserObj({
          displayName: user.displayName,
          uid: user.uid,
          updateProfile: (args) => updateProfile(user, {displayName: user.displayName}),
        });
      } else {
        setUserObj(null);
      }
      setInit(true);
    });
  }, [])
  const refreshUser = () => {
    const user = authService.currentUser;
    setUserObj({
      displayName: user.displayName,
      uid: user.uid,
      updateProfile: (args) => updateProfile(user, { displayName: user.displayName }),
    });
  }
  let height = window.innerHeight;
  height = height / 4;

  return (
    <>
      {!init ? (
        <div className="initializing" style={{marginTop: height}}>initializing...</div>
      ) : (
        <AppRouter isLoggedIn={Boolean(userObj)} userObj={userObj} refreshUser={refreshUser} />
      )}
    </>
  );
}

export default App;
