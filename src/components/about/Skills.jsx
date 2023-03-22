import React from "react";

const skillsContent = [
  //Basic
  { skillPercent: "87", skillName: "C/C++" },
  { skillPercent: "85", skillName: "Python" },
  { skillPercent: "98", skillName: "Javascript" },
  { skillPercent: "96", skillName: "Typescript" },
  { skillPercent: "80", skillName: "Solidity" },
  // { skillPercent: "68", skillName: "Rust" },
  { skillPercent: "76", skillName: "Golang" },
  { skillPercent: "95", skillName: "NodeJS" },
  { skillPercent: "92", skillName: "PHP" },
  // { skillPercent: "85", skillName: "MySQL" },
  // { skillPercent: "73", skillName: "PostgreSQL" },
  // { skillPercent: "78", skillName: "Redis" },
  // { skillPercent: "83", skillName: "MongoDB" },

  //WEB3
  { skillPercent: "88", skillName: "Web3" },
  // { skillPercent: "83", skillName: "DEX" },
  // { skillPercent: "66", skillName: "Moralis" },
  // { skillPercent: "53", skillName: "Ethereum" },
  // { skillPercent: "53", skillName: "Solana" },
  // { skillPercent: "53", skillName: "Casper" },
  // { skillPercent: "78", skillName: "Hardhat" },
  // { skillPercent: "66", skillName: "Truffle" },

  //Fron-end
  { skillPercent: "100", skillName: "HTML5" },
  { skillPercent: "98", skillName: "CSS" },
  // { skillPercent: "85", skillName: "SCSS" },
  // { skillPercent: "59", skillName: "LESS" },
  { skillPercent: "95", skillName: "React" },
  { skillPercent: "92", skillName: "Angular" },
  { skillPercent: "89", skillName: "Vue.js" },

  //Backend
  { skillPercent: "86", skillName: "Laravel" },
  { skillPercent: "94", skillName: "ExpressJS" },
  { skillPercent: "82", skillName: "Django" },

  //No-Coding
  { skillPercent: "85", skillName: "WordPress" },
  { skillPercent: "80", skillName: "Shopify" },
  { skillPercent: "78", skillName: "Webflow" },
  //OTHERS
  // { skillPercent: "84", skillName: "STREAMING" },
];

const Skills = () => {
  return (
    <>
      {skillsContent.map((val, i) => (
        <div className="col-6 col-md-3 mb-3 mb-sm-5" key={i}>
          <div className={`c100 p${val.skillPercent}`}>
            <span>{val.skillPercent}%</span>
            <div className="slice">
              <div className="bar"></div>
              <div className="fill"></div>
            </div>
          </div>
          <h6 className="open-sans-font text-center mt-2 mt-sm-4">
            {val.skillName}
          </h6>
        </div>
      ))}
    </>
  );
};

export default Skills;
