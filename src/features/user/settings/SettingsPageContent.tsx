"use client";
import React from "react";
import { UserSettings } from "./components/UserSettings";
import { DangerZone } from "./components/DangerZone";

export const SettingsPageContent = () => {
  return (
    <main className="flex-1 flex flex-col gap-5 container mx-auto my-3">
      <UserSettings />
      <DangerZone />
    </main>
  );
};
