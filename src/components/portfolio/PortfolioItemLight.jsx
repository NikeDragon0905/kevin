import React, { useState } from "react";
import PortfolioModal from "./PortfolioModal";
import Modal from "react-modal";

export default function PortfolioItemLight({ portfolio }) {
  const [isOpen, setIsOpen] = useState(false);
  function toggleModal() {
    setIsOpen(!isOpen);
  }
  return (
    <li className='direction-reveal'>
      <figure className='direction-reveal__card' onClick={toggleModal}>
        <img src={portfolio.image} alt='Portolio' />
        <div className=' direction-reveal__overlay direction-reveal__anim--enter'>
          <span className='direction-reveal__title'>{portfolio.name}</span>
        </div>
      </figure>

      {/* Start ModalTwoContent */}
      <Modal
        isOpen={isOpen}
        onRequestClose={toggleModal}
        contentLabel='My dialog'
        className='custom-modal dark green'
        overlayClassName='custom-overlay'
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
      {/* End  ModalTwoContent */}
    </li>
  );
}
