import React from "react";
import tokenEconomics from "../jsonData/tokenEconomics.json";
import TokenomicsTable from "../Table/Tokenomics/TokenomicsTable";
import TokenBreakDownTable from "../Table/TokenBreakDown/TokenBreakDownTable";
const Tokenomics = () => {
  return (
    <div className="section tokenomics-div">
      <div className="row">
        <h1 className="h1">Tokenomics Breakdown</h1>
        <h2 className="h2">TOKEN NAME: WeSendit ($WSI) TOKEN TYPE: BEP- </h2>
      </div>

      <div className="row">
        <div className="card-box-dark">
          <TokenBreakDownTable />
        </div>
      </div>  
      <p>&nbsp;</p>

      <div className="row">
        {tokenEconomics.map((tokenEco) => {
          return (
            <div className="col-lg-6" key={tokenEco.id}>
              <h2 className="h2 colorfull-text">{tokenEco.heading}</h2>
              <div dangerouslySetInnerHTML={{ __html: tokenEco.content }} />
            </div>
          );
        })}
      </div>

      <p>&nbsp;</p>

      <div className="row">
        <div className="card-box-dark">
          <TokenomicsTable />
        </div>
      </div>
    </div>
  );
};
export default Tokenomics;
