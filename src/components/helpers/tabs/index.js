import React from "react";
import { Tabs } from "../../header/styles";

const TabsHelper = ({ conditionCarouselProp, handleMenuOptionsClickProp }) => {
  return (
    <>
      <Tabs
        isSelected={conditionCarouselProp === "TvSeries"}
        onClick={() => handleMenuOptionsClickProp("TvSeries")}
      >
        TvSeries
      </Tabs>
      <Tabs
        isSelected={conditionCarouselProp === "Movies"}
        onClick={() => handleMenuOptionsClickProp("Movies")}
      >
        Movies
      </Tabs>
      <Tabs
        isSelected={conditionCarouselProp === "Upcoming"}
        onClick={() => handleMenuOptionsClickProp("Upcoming")}
      >
        Upcoming
      </Tabs>
    </>
  );
};

export default TabsHelper;
