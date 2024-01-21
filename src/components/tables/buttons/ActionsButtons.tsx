import { FunctionComponent } from "react";
import cloud from "../../../assets/img/cloud-gray.svg";
import synchronize from "../../../assets/img/synchronize.svg";
import trash from "../../../assets/img/trash.svg";

interface ActionsButtonsProps {
  onDelete: () => void; // Add onDelete prop
}

const ActionsButtons: FunctionComponent<ActionsButtonsProps> = (
  props: ActionsButtonsProps
) => {
  return (
    <div className="action-btns-container">
      <button
        className={`action-button btn1`}
        // onClick={() => null}
        // ${props.prop1}
      >
        <img width={"35px"} src={cloud} alt="" />
      </button>
      <button
        className={`action-button btn2`}
        // onClick={() => null}
        // ${props.prop1}
      >
        <img width={"25px"} src={synchronize} alt="" />
      </button>
      <button
        className={`action-button btn3 trash-btn`}
        onClick={() => props.onDelete()}
        // calling onDelete with parantheses, they are important here
        // ${props.prop1}
      >
        <img width={"35px"} src={trash} alt="" />
      </button>
    </div>
  );
};

export default ActionsButtons;
