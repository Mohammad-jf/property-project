"use client";
import { useState } from "react";
import { createContext } from "react";
import { useContext, useEffect } from "react";
import { useSession } from "next-auth/react";
import getUnreadMessageCount from "@/actions/getUnreadMessageCount";

const GlobalContext = createContext();

// create provider
export function GlobalProvider({ children }) {
  const [unReadCount, setUnreadCount] = useState(0);
  const { data: session } = useSession();

  useEffect(() => {
    if (session && session.user) {
      getUnreadMessageCount().then((res) => {
        if (res.count) {
          setUnreadCount(res.count);
        }
      });
    }
  }, [session, getUnreadMessageCount]);

  return (
    <GlobalContext.Provider value={{ unReadCount, setUnreadCount }}>
      {children}
    </GlobalContext.Provider>
  );
}

export function useGlobalContext() {
  return useContext(GlobalContext);
}
