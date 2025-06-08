import React, { useEffect, useState } from "react";
import "./WelcomePopup.css";

function WelcomePopup() {
  const [showModal, setShowModal] = useState(true);

  const closeModal = () => {
    setShowModal(false);
  };

  useEffect(() => {
    // const handleOutsideClick = (event) => {
    //     if (!event.target.closest('.modal-content')) {
    //         closeModal();
    //     }
    // }
    // if (showModal) {
    //     window.addEventListener('click', handleOutsideClick);
    // }
    // return () => window.removeEventListener('click', handleOutsideClick);
  }, [showModal]);

  if (!showModal) {
    return null;
  }

  return (
    <div className="modal">
      <div className="modal-content">
        <div className="container text-center devsecops">
          <h1>WELCOME</h1>
          <h5>TO</h5>
          <h3 className="mb-5">The DevSecOps Day 2 Hackathon!
          </h3>
        </div>
        <button className="btn close" onClick={closeModal}>Get Started</button>
      </div>
    </div>
  );
}

export default WelcomePopup;
