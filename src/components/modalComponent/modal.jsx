// eslint-disable-next-line no-unused-vars
import React from "react";
import styles from "../../../src/components/modalComponent/Modal.module.css";
import successfulScreenImg from "../../assets/successful-screen-Img.png";
import { RiCloseLine } from "react-icons/ri";
import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const Modal = ({ setIsOpen }) => {
  return (
    <>
      <div className={styles.darkBG} onClick={() => setIsOpen(false)} />
      <div className={styles.centered}>
        <div className={styles.modal}>
        <button className={styles.closeBtn} onClick={() => setIsOpen(false)}>
            <RiCloseLine style={{ marginBottom:"-6px" }} />
          </button>
          <div className={styles.modalContent}>
            <img src={successfulScreenImg} alt="" />
          </div><br />
          <div className={styles.h2}>
            <h2>
            Your Farm is set!
            </h2>
          </div>
          <div className={styles.modalActions}>
            <div className={styles.actionsContainer}>
              <Link to='/1/dashboard' className={styles.dashboardBtn} onClick={() => setIsOpen(false)}>
                Go to Dashboard
              </Link>
             
            </div>
          </div>
        </div>
      </div>
      </>
  );
};

export default Modal;