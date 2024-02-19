import React, { useState } from "react";
import { MotionTabs, Tabs } from "../../header/styles";

const TabsHelper = ({ conditionCarouselProp, handleMenuOptionsClickProp }) => {
  const [isMenuClicked, setIsMenuClicked] = useState(false);

  const handleTabsClick = (condition) => {
    setIsMenuClicked(!isMenuClicked);
    handleMenuOptionsClickProp(condition);
  };

  const tabs = [
    { label: "Series", condition: conditionCarouselProp === "Series" },
    { label: "Filmes", condition: conditionCarouselProp === "Filmes" },
    { label: "Chegando", condition: conditionCarouselProp === "Chegando" },
  ];

  return (
    <>
      {tabs.map((tab, index) => (
        <MotionTabs
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          whileTap={{ scale: 0.9 }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 24,
              delay: 0.3 + index * 0.35 
            }}
        >
          <Tabs
            isSelected={tab.condition}
            onClick={() => handleTabsClick(tab.label)}
          >
            {tab.label}
          </Tabs>
        </MotionTabs>
      ))}
    </>
  );
};

export default TabsHelper;
