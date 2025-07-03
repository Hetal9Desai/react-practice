

import React, { createContext, useContext, useState } from "react";

type ContextType = {
  currentTab: number;
  setCurrentTab: React.Dispatch<React.SetStateAction<number>>;
};

const TabContext = createContext<ContextType>({
  currentTab: 0,
  setCurrentTab: () => {},
});

const List: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <>{children}</>;
};

const Tab: React.FC<{ children: React.ReactNode; index: number }> = ({
  children,
  index,
}) => {
  const { currentTab, setCurrentTab } = useContext(TabContext);
  const color = index === currentTab ? "red" : "blue";

  return (
    <button style={{ color }} onClick={() => setCurrentTab(index)}>
      {children}
    </button>
  );
};

const Content: React.FC<{ children: React.ReactNode; index: number }> = ({
  children,
  index,
}) => {
  const { currentTab } = useContext(TabContext);

  return <>{currentTab === index ? children : null}</>;
};

// Define a type for Tabs component that includes static subcomponents
type TabsComponent = React.FC<{ children: React.ReactNode }> & {
  List: typeof List;
  Tab: typeof Tab;
  Content: typeof Content;
};

const Tabs: TabsComponent = ({ children }) => {
  const [currentTab, setCurrentTab] = useState(0);

  return (
    <TabContext.Provider value={{ currentTab, setCurrentTab }}>
      {children}
    </TabContext.Provider>
  );
};

Tabs.List = List;
Tabs.Tab = Tab;
Tabs.Content = Content;

export default Tabs;
