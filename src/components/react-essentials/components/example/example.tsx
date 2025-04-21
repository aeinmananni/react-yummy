import { useState } from 'react';
import { Tabs } from './tabs';
import { tabs } from '../../../../data';
import { TabsType } from '../../../../models';
import Line from '../../../../custom/line';
export default function Example() {
  const [tabsInfo, setTabsInfo] = useState<Pick<TabsType, 'id'>>({
    id: tabs[0].id
  });

  return (
    <div className="flex flex-col gap-7  w-full bg-clip-text text-transparent bg-gradient-to-tr  from-purple-600 to-sky-500  p-2">
      <Line />
      <span className="text-3xl">Example</span>
      <Tabs setTabsInfo={setTabsInfo} tabsInfo={tabsInfo} />
      <div className="w-full min-h-64  p-3 text-white bg-purple-950/50 rounded-lg">
        <span className="font-bold text-3xl">{tabs[tabsInfo.id - 1].title}</span>
        <pre>{tabs[tabsInfo.id - 1].exp}</pre>
      </div>
    </div>
  );
}
