import React from "react";
import { authService } from "../fbase"
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import BottomMenu from "../components/BottomMenu";

const Profile = () => {
  const navigate = useNavigate();
  const onLogOutClick = () => {
    signOut(authService);
    navigate("/");
  };

  return (
    <>
      <div>Profile</div>
      <div onClick={onLogOutClick}>Log Out</div>
      <BottomMenu routeName="Profile" />
    </>
  );
}

export default Profile;