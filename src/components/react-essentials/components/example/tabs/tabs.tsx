import { tabs } from '../../../../../data';
import Button from '../../../../../custom/button';
import { TabsType } from '../../../../../models';
import { Dispatch, SetStateAction } from 'react';

type TabsProps = {
  tabsInfo: Pick<TabsType, 'id'>;
  setTabsInfo: Dispatch<SetStateAction<Pick<TabsType, 'id'>>>;
};

export default function Tabs({ tabsInfo, setTabsInfo }: TabsProps) {
  return (
    <menu className="flex items-center gap-2">
      {tabs.map((tab, index) => (
        <Button
          key={index}
          className={` ${
            tab.id === tabsInfo?.id ? 'bg-purple-800' : ''
          }  p-1 rounded-md text-white hover:bg-purple-950 duration-300 border border-purple-950 shadow-sm`}
          onClick={() => setTabsInfo((prev) => ({ ...prev, id: tab.id }))}
        >
          {tab.title}
        </Button>
      ))}
    </menu>
  );
}
