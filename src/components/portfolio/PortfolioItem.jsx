import { useState } from "react";
import Modal from "react-modal";
import PortfolioModal from "./PortfolioModal";
const PortfolioItem = ({ portfolio }) => {
  const [isOpen, setIsOpen] = useState(false);
  function toggleModal() {
    setIsOpen(!isOpen);
  }

  return (
    <li data-aos='fade-right' data-aos-duration='1200' data-aos-delay='0'>
      <figure onClick={toggleModal} w='auto' h='auto'>
        <img src={portfolio.image} w='auto' h='auto' alt='Portolio' />
        <div className=' hover-content-wrapper'>
          <span className='content-title'>{portfolio.name}</span>
        </div>
      </figure>

      {/* Start ModalOneContent */}
      <Modal
        isOpen={isOpen}
        onRequestClose={toggleModal}
        contentLabel='My dialog'
        className='custom-modal dark'
        overlayClassName='custom-overlay dark'
        closeTimeoutMS={500}>
        <div>
          <button className='close-modal' onClick={toggleModal}>
            <img src='/img/cancel.svg' alt='close icon' />
          </button>
          {/* End close icon */}

          <div className='box_inner portfolio'>
            <PortfolioModal portfolio={portfolio} />
          </div>
        </div>
      </Modal>
      {/* End  ModalOneContent */}
    </li>
  );
};

export default PortfolioItem;
