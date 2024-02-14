import React from "react";
import Profile from "./components/Profile";
import "./App.css";
import Avatar from "./components/Avatar";

export default function AppProfile() {
  return (
    <>
      <Avatar
        image="https://avatars.githubusercontent.com/u/87633110?v=4"
        isNew={true}
      />
      <Profile
        image="https://avatars.githubusercontent.com/u/87633110?v=4"
        name="James Kim"
        title="프론트엔드 개발자"
        isNew={true}
      />
      <Profile
        image="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=922&q=80"
        name="Anna Young"
        title="백엔드 개발자"
      />
      <Profile
        image="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80"
        name="Bob Yu"
        title="풀스택 개발자"
      />
    </>
  );
}
