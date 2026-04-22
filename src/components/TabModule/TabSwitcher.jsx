import { useContext } from "react";
import { createContext, useState } from "react";

const DataContext = createContext();

function Tab({ id, children }) {
  const { setActiveTabId } = useContext(DataContext);
  return <div onClick={() => setActiveTabId(id)}>{children}</div>;
}
function TabPanel({ activeValue, children }) {
  const { activeTabId } = useContext(DataContext);
  console.log("activeTabId", activeTabId);
  return <div>{activeTabId === activeValue ? children : null}</div>;
}

function TabSwitcher({ children }) {
  const [activeTabId, setActiveTabId] = useState("a");
  return (
    <DataContext.Provider value={{ activeTabId, setActiveTabId }}>
      {children}
    </DataContext.Provider>
  );
}

TabSwitcher.Tab = Tab;
TabSwitcher.TabPanel = TabPanel;

export default TabSwitcher;
