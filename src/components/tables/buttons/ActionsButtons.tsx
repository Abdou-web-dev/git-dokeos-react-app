import { FunctionComponent, useEffect, useState } from "react";
import Modal from "react-modal";
import cloud from "../../../assets/img/cloud-gray.svg";
import synchronize from "../../../assets/img/synchronize.svg";
import trash from "../../../assets/img/trash.svg";

interface ActionsButtonsProps {
  onDelete: () => void; // Add onDelete prop
  cancelStylesPendingDeletion: () => void;
  applyStylesPendingDeletion: () => void;
}

const ActionsButtons: FunctionComponent<ActionsButtonsProps> = (
  props: ActionsButtonsProps
) => {
  const [isOpen, setIsOpen] = useState(false);

  function remove(): void {
    props.onDelete();
    // calling onDelete with parantheses, they are important here
    setIsOpen(false);
  }

  useEffect(() => {
    // Set the app element for react-modal
    Modal.setAppElement("#root");
    //react-modal: App element is not defined. Please use `Modal.setAppElement(el)` or set `appElement={el}`. This is needed so screen readers don't see main content when modal is opened.
  }, []);

  return (
    <div className="action-btns-container">
      <>
        <button className={`action-button btn1`}>
          <img width={"35px"} src={cloud} alt="" />
        </button>
        <button className={`action-button btn2`}>
          <img width={"25px"} src={synchronize} alt="" />
        </button>
        <button
          className={`action-button btn3 trash-btn`}
          onClick={() => {
            setIsOpen(true); // Set the selected row for deletion
            props.applyStylesPendingDeletion();
          }}
        >
          <img width={"35px"} src={trash} alt="" />
        </button>
      </>
      <>
        <Modal
          isOpen={isOpen}
          onRequestClose={() => setIsOpen(false)}
          contentLabel="Delete Prompt Modal"
          style={{
            content: {
              width: "30%",
              height: "20%",
              margin: "0 auto",
            },
          }}
        >
          <h3>Are you sure you want to delete this item ?</h3>
          <div className="modal-btns">
            <button className={`modal-btn-yes`} onClick={() => remove()}>
              <span>YES</span>
            </button>
            <button
              className={`modal-btn-no`}
              onClick={() => {
                setIsOpen(false);
                props.cancelStylesPendingDeletion();
              }}
            >
              <span>NO</span>
            </button>
          </div>
        </Modal>
      </>
    </div>
  );
};

export default ActionsButtons;
