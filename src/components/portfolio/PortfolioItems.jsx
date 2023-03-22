import React from "react";
import PortfolioItem from "./PortfolioItem";
import PortfolioItemLight from "./PortfolioItemLight";
export default function PortfolioItems({ portfolios, dark }) {
  if (dark)
    return (
      <ul className='row grid justify-content-center'>
        {portfolios.map((portfolio, i) => (
          <PortfolioItem key={i} portfolio={portfolio} />
        ))}
      </ul>
    );
  return (
    <ul className='row grid justify-content-center'>
      {portfolios.map((portfolio, i) => (
        <PortfolioItemLight key={i} portfolio={portfolio} />
      ))}
    </ul>
  );
}
