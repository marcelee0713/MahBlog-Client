"use client";
import React from "react";
import { UserProfileContent } from "./components/user-profile/UserProfile";

interface props {
  userId?: string;
}

export const ProfilePageContent = ({ userId }: props) => {
  return (
    <main className="default-user-container">
      <UserProfileContent userId={userId} />
    </main>
  );
};
