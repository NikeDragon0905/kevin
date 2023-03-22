import React from "react";

const educationContent = [
  {
    year: "2013 - 2017",
    university: "National University of Singapore",
    degree: "Bachelor of Computer Science (BCompSc)",
    details: "GPA: 3.7/4.0",
  },
  {
    year: "2018",
    university: "HTML5 Web Developer Camp Certificate",
    degree: "⸷",
    details: "",
  },
  {
    year: "2019",
    university: "Front-end Web Development Certificate",
    degree: "⸷",
    details: "",
  },
  {
    year: "2020",
    university: "Full-stack Web and Multiplatform App Development Certificate",
    degree: "⸷",
    details: "",
  },
  {
    year: "2021",
    university: "IBM Blockchain Foundation for Developer by IBM on Coursera",
    degree: "⸷",
    details: "",
  },
];

const Education = () => {
  return (
    <ul>
      {educationContent.map((val, i) => (
        <li key={i}>
          <div className='icon'>
            <i className='fa fa-briefcase'></i>
          </div>
          <span className='time open-sans-font text-uppercase'>{val.year}</span>
          <h5 className='poppins-font text-uppercase'>
            {val.university}
            <span className='place open-sans-font'>{val.degree}</span>
          </h5>
          <p className='open-sans-font'>{val.details}</p>
        </li>
      ))}
    </ul>
  );
};

export default Education;
