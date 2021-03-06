function makeTypeChecker(tabsRole) {
  return element => !!element.type && element.type.tabsRole === tabsRole;
}

export const isTab = makeTypeChecker('Tab');
export const isTabList = makeTypeChecker('TabList');
export const isTabPanel = makeTypeChecker('TabPanel');
