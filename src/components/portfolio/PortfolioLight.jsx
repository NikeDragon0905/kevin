import React, { useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import DirectionReveal from "direction-reveal";
import { portfolioTypes, portfolioData } from "./portfolios";
import PortfolioItems from "./PortfolioItems";
const PortfolioLight = () => {
  const [tabChanged, setTabChanged] = useState(true);
  useEffect(() => {
    // Init with default setup
    DirectionReveal();

    // Init with all options at default setting
    DirectionReveal({
      selector: ".direction-reveal",
      itemSelector: ".direction-reveal__card",
      animationName: "slide",
      animationPostfixEnter: "enter",
      animationPostfixLeave: "leave",
      touchThreshold: 500,
    });
  }, [tabChanged]);
  function handleClick(e) {
    setTabChanged(!tabChanged);
  }
  return (
    <Tabs>
      <TabList className='portfolio-tab-list'>
        <Tab onClick={handleClick}>ALL</Tab>
        {Object.keys(portfolioTypes).map((keyName, i) => (
          <Tab key={i} onClick={handleClick}>
            {portfolioTypes[keyName].toString().toUpperCase()}
          </Tab>
        ))}
      </TabList>

      <div className='portfolio-tab-content'>
        <TabPanel>
          <PortfolioItems portfolios={portfolioData} dark={false} />
        </TabPanel>
        {/* End All Project */}
        {Object.keys(portfolioTypes).map((keyName, i) => (
          <TabPanel key={i}>
            <PortfolioItems
              portfolios={portfolioData.filter(
                (portfolio) => portfolio.type === portfolioTypes[keyName]
              )}
              dark={false}
            />
          </TabPanel>
        ))}
      </div>
    </Tabs>
  );
};

export default PortfolioLight;
