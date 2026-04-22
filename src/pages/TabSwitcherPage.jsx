import TabSwitcher from "../components/TabModule/TabSwitcher";
function TabSwitcherPage() {
  return (
    <div>
      <TabSwitcher>
        <header>
          <ul>
            <li>
              <TabSwitcher.Tab id="a">
                <button>Tab A</button>
              </TabSwitcher.Tab>
            </li>
            <li>
              <TabSwitcher.Tab id="b">
                <button>Tab B</button>
              </TabSwitcher.Tab>
            </li>
          </ul>
        </header>
        <main>
          <TabSwitcher.TabPanel activeValue="a">
            <div>Je suis dans la tab a</div>
          </TabSwitcher.TabPanel>
          <TabSwitcher.TabPanel activeValue="b">
            <div>Je suis dans la tab b</div>
          </TabSwitcher.TabPanel>
        </main>
      </TabSwitcher>
    </div>
  );
}

export default TabSwitcherPage;
