import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { portfolioTypes, portfolioData } from "./portfolios";
import PortfolioItems from "./PortfolioItems";

const Portfolio = () => {
  return (
    <Tabs>
      <TabList className='portfolio-tab-list'>
        <Tab>ALL</Tab>
        {Object.keys(portfolioTypes).map((keyName, i) => (
          <Tab key={i}>{portfolioTypes[keyName].toString().toUpperCase()}</Tab>
        ))}
      </TabList>

      <div className='portfolio-tab-content'>
        <TabPanel>
          <PortfolioItems portfolios={portfolioData} dark={true} />
        </TabPanel>
        {/* End All Project */}
        {Object.keys(portfolioTypes).map((keyName, i) => (
          <TabPanel key={i}>
            <PortfolioItems
              portfolios={portfolioData.filter(
                (portfolio) => portfolio.type === portfolioTypes[keyName]
              )}
              dark={true}
            />
          </TabPanel>
        ))}
      </div>
    </Tabs>
  );
};

export default Portfolio;
