import { useEffect, useState } from "react";

export const useOnline = (): boolean => {
  const [isOnline, setIsOnline] = useState<boolean>(true);
  useEffect(() => {
    const handleOnline = () => {
      console.log("listening");
      setIsOnline(true);
    };

    const handleOffline = () => {
      console.log("Not listening");
      setIsOnline(false);
    };

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);
  return isOnline;
};
