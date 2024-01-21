import { FunctionComponent } from "react";
import { ArrowDown } from "../../icons/ArrowDown";
import { ArrowUp } from "../../icons/ArrowUp";

interface HeadButtonProps {
  label: string;
  title: string;
  sortDirection: string | null;
  handleSort: (column: string) => void;
}
// HeadButton component is well-structured for handling sorting with smooth transitions. It incorporates the ArrowUp and ArrowDown components based on the sorting direction, and the transition effect is applied to the arrow icon for a smooth animation.
const HeadButton: FunctionComponent<HeadButtonProps> = (
  props: HeadButtonProps
) => {
  return (
    <button
      // the styles of this btn will apply a smooth transition effect when clicking the button. The transition property is set on the .arrow-icon class, and the transition duration is 0.3s. This means that any changes to the transform property of the .arrow-icon will take 0.3 seconds to complete, creating a smooth animation effect
      className={`arrow-button ${
        // added these conditional classNames in order to position the arrow icon next to the button title
        props.title.length > 12 ? "arrow-button-length__12" : ""
      }${props.title === "Apprenant" ? "arrow-button-appre" : ""}
      ${props.title === "Formation" ? "arrow-button-forma" : ""}
      ${props.title === "Actions" ? "arrow-button-actions" : ""}
      ${props.title === "Date d'Exprir" ? "arrow-button-exp" : ""}
      ${props.title === "Date de génér" ? "arrow-button-gener" : ""}
      ${props.title === "Nom du Certif" ? "arrow-button-certif" : ""}
      `}
      onClick={() => props.handleSort(props.label)}
    >
      <span>{props.title}</span>
      <div className="arrow-icon">
        {props.sortDirection === "asc" ? <ArrowUp /> : <ArrowDown />}
      </div>
    </button>
  );
};

export default HeadButton;
