"use client";
import React from "react";
import { UserSettings } from "./components/UserSettings";
import { DangerZone } from "./components/DangerZone";

export const SettingsPageContent = () => {
  return (
    <main className="default-user-container">
      <UserSettings />
      <DangerZone />
    </main>
  );
};
