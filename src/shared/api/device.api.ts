export const generateDeviceUUID = async (): Promise<void> => {
  const res = await fetch("/api/user/device", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!res.ok) console.warn("Failed to save device id");
};
