import React from "react";

const Address = () => {
  const contactInfo = {
    gmail: "nike.dragon0905@gmail.com",
    skype: "live:.cid.db7376c3cccdf9af",
    discord: "NikeDragon#9783",
  };
  return (
    <>
      <p className="open-sans-font custom-span-contact position-relative">
        <i className="fa fa-google position-absolute"></i>
        <span className="d-block">Gmail</span>{" "}
        <a href={`mailto:${contactInfo.gmail}`}>{contactInfo.gmail}</a>
      </p>
      {/* End .custom-span-contact */}

      <p className="open-sans-font custom-span-contact position-relative">
        <i className="fa fa-skype position-absolute"></i>
        <span className="d-block">Skype</span>{" "}
        <a href={`mailto:${contactInfo.skype}`}>{contactInfo.skype}</a>
      </p>
      {/* End .custom-span-contact */}

      <p className="open-sans-font custom-span-contact position-relative">
        <i className="fa fa-gamepad position-absolute"></i>
        <span className="d-block">Discord</span>{" "}
        <a href={`mailto:${contactInfo.discord}`}>{contactInfo.discord}</a>
      </p>
      {/* End .custom-span-contact */}
    </>
  );
};

export default Address;
