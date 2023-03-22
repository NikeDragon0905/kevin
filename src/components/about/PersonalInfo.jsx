import React from "react";

const personalInfoContent = [
  { meta: "first name", metaInfo: "Kevin" },
  { meta: "last name", metaInfo: "Harris" },
  { meta: "Age", metaInfo: "27" },
  { meta: "Freelance", metaInfo: "Available" },
  { meta: "Email", metaInfo: "nike.dragon0905@gmail.com" },
  { meta: "language", metaInfo: "English" },
];

const PersonalInfo = () => {
  return (
    <ul className="about-list list-unstyled open-sans-font">
      {personalInfoContent.map((val, i) => (
        <li key={i}>
          <span className="title">{val.meta}: </span>
          <span className="value d-block d-sm-inline-block d-lg-block d-xl-inline-block">
            {val.metaInfo}
          </span>
        </li>
      ))}
    </ul>
  );
};

export default PersonalInfo;
