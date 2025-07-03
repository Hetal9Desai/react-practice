// import React, { createContext, useState, type ReactNode } from "react";

// // 1. Fix typing
// type ContextType = {
//   currentTab: number;
//   setCurrentTab: React.Dispatch<React.SetStateAction<number>>;
// };

// // 2. Create the context with correct default value
// const TabContext = createContext<ContextType>({
//   currentTab: 0,
//   setCurrentTab: () => {}, // dummy function to avoid undefined
// });

// // 3. Context provider component
// const TabsProvider = ({ children }: { children: ReactNode }) => {
//   const [currentTab, setCurrentTab] = useState(0);

//   return (
//     <TabContext.Provider value={{ currentTab, setCurrentTab }}>
//       {children}
//     </TabContext.Provider>
//   );
// };

// export { TabsProvider, TabContext };

import { createContext, useContext, useState, type ReactNode } from "react";

type ContextType = {
  currentTab: number;
  setCurrentTab: React.Dispatch<React.SetStateAction<number>>;
};

const TabsContext = createContext<ContextType>({
  currentTab: 0,
  setCurrentTab: () => {},
});

const TabsProvider = ({ children }: { children: ReactNode }) => {
  const [currentTab, setCurrentTab] = useState(0);

  return (
    <TabsContext.Provider value={{ currentTab, setCurrentTab }}>
      {children}
    </TabsContext.Provider>
  );
};

export { TabsProvider, TabsContext };

export const List: React.FC<{ children: ReactNode }> = ({ children }) => {
  return <>{children}</>;
};

export const Tab: React.FC<{ children: ReactNode; index: number }> = ({
  children,
  index,
}) => {
  const { currentTab, setCurrentTab } = useContext(TabsContext);
  const color = index === currentTab ? "red" : "blue";
  return (
    <button style={{ color }} onClick={() => setCurrentTab(index)}>
      {children}
    </button>
  );
};

export const Content: React.FC<{ children: ReactNode; index: number }> = ({
  children,
  index,
}) => {
  const { currentTab } = useContext(TabsContext);
  return currentTab === index ? <>{children}</> : <></>;
};
