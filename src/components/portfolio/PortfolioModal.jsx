import React from "react";

const PortfolioModal = ({ portfolio }) => {
  const { type, name, client, languages, preview, image } = portfolio;
  return (
    <div className='slideshow'>
      <figure>
        {/* Project Details Starts */}
        <figcaption>
          <h3>{name}</h3>
          <div className='row open-sans-font'>
            <div className='col-12 col-sm-6 mb-2'>
              <i className='fa fa-file-text-o pr-2'></i>
              <span className='project-label'>Project </span>:{" "}
              <span className='ft-wt-600 uppercase'>{type}</span>
            </div>
            {/* End .col */}

            <div className='col-12 col-sm-6 mb-2'>
              <i className='fa fa-user-o pr-2'></i>
              <span className='project-label'>Client </span>:{" "}
              <span className='ft-wt-600 uppercase'>{client}</span>
            </div>
            {/* End .col */}

            <div className='col-12 col-sm-6 mb-2'>
              <i className='fa fa-code pr-2'></i>
              <span className='project-label'>Langages </span>:{" "}
              <span className='ft-wt-600 uppercase'>{languages}</span>
            </div>
            {/* End .col */}

            <div className='col-12 col-sm-6 mb-2'>
              <i className='fa fa-external-link pr-2'></i>
              <span className='project-label'>Preview </span>:{" "}
              <span className='ft-wt-600 uppercase'>
                <a href={preview} target='_blank' rel='noreferrer'>
                  {preview}
                </a>
              </span>
            </div>
            {/* End .col */}
          </div>
          {/* End .row */}
        </figcaption>
        {/* Project Details Ends */}

        {/*  Main Project Content Starts */}
        <img src={image} alt='Portolio' />
        {/* Main Project Content Ends */}
      </figure>
    </div>
    //  End .slideshow
  );
};

export default PortfolioModal;
