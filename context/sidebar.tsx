"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";

interface SidebarContext {
  show: boolean;
  showSidebar(): void;
  hideSidebar(): void;
}

const SidebarContext = createContext<SidebarContext>(
  null as unknown as SidebarContext
);

export function SidebarProvider({ children }: { children: ReactNode }) {
  const [show, setShow] = useState(false);
  const hideSidebar = useCallback(() => setShow(false), []);
  const showSidebar = useCallback(() => setShow(true), []);

  useEffect(() => {
    if (!show) return;
    const controller = new AbortController();
    setTimeout(() => {
      window.addEventListener(
        "click",
        () => {
          hideSidebar();
          controller.abort();
        },
        {
          signal: controller.signal,
        }
      );
    });
    return () => controller.abort();
  }, [show, hideSidebar]);

  return (
    <SidebarContext.Provider
      value={{
        show,
        showSidebar,
        hideSidebar,
      }}
    >
      {children}
    </SidebarContext.Provider>
  );
}

export const useSidebar = () => useContext(SidebarContext);
