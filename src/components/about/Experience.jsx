import React from "react";

const experienceContent = [
  {
    year: "Feb 2022 - Feb 2023",
    position: "Senior Front-end & Blockchain Engineer",
    compnayName: "PowerUSD, LLC - United States",
    details:
      `Developed smart contracts for decentralized lending platform on Ethereum blockchain and integrated with Front-end using web3\n
      & Worked on Golang Backend API service`,
  },
  {
    year: "Oct 2020 - Dec 2021",
    position: "Senior Full-stack Engineer",
    compnayName: "Golden Hippo - United States",
    details:
      `Worked with a team of senior web designers, full-stack engineers, and the QAs to meet project goals and create effective user experiences for millions of subscribers\n
      & Developed full-stack applications across various platforms using the latest industry-adopted technologies and frameworks\n
      & Worked using CMS Frameworks and no-coding platforms`,
  },
  {
    year: "Dec 2019 - Sep 2020",
    position: "Full-stack Developer",
    compnayName: "Coding Dojo- United States",
    details:
      `Developed dynamic and interactive websites that ensured high traffic, page views, and user experience, resulting in 40% increase in sales revenue\n
      & Oversaw the full lifecycle of software development for 4 projects with 100% on-time delivery while staying 5% under budget\n
      & Added to the company database of code by developing reusable code that could minimize the time needed to maintain the projects`,
  },
  {
    year: "Jun 2017 - Nov 2019",
    position: "Web Developer Intern",
    compnayName: "Forest Company - Hong Kong",
    details:
      `Designed the Web application layout and forms\n
      & Handled all the client-side validations, slide show, hide/show controls, dropdown menus, and tab navigation using jQuery\n
      & Wrote application-level code to perform client-side validations using jQuery and JavaScript\n
      & Used SVN for version control and defect tracking`,
  },
];

const Experience = () => {
  return (
    <ul>
      {experienceContent.map((val, i) => (
        <li key={i}>
          <div className="icon">
            <i className="fa fa-briefcase"></i>
          </div>
          <span className="time open-sans-font text-uppercase">{val.year}</span>
          <h5 className="poppins-font text-uppercase">
            {val.position}
            <span className="place open-sans-font">{val.compnayName}</span>
          </h5>
          <p className="open-sans-font">{val.details}</p>
        </li>
      ))}
    </ul>
  );
};

export default Experience;
