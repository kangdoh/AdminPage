import { createContext, useCallback, useContext, useState } from "react";
const SidebarContext = createContext();

// 태그를 이용하기 위한 export 변수
export const SidebarProvider = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const toggleSidebar = useCallback(() => {
    setSidebarOpen((prev) => !prev);
  }, [])

  return (
    <SidebarContext.Provider value={{ sidebarOpen, toggleSidebar }}>
      { children }
    </SidebarContext.Provider>
  );
};

// 조정하기 위한 export 변수
export const useSidebar = () => useContext(SidebarContext);
