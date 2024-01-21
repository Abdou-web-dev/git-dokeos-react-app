import { FunctionComponent } from "react";
import { ArrowDown } from "../../icons/ArrowDown";
import { ArrowUp } from "../../icons/ArrowUp";

interface HeadButtonProps {
  label: string;
  handleSort: (column: string) => void;
  sortDirection: string;
  title: string;
}

const HeadButton: FunctionComponent<HeadButtonProps> = (
  props: HeadButtonProps
) => {
  return (
    <button
      // the styles of this btn will apply a smooth transition effect when clicking the button. The transition property is set on the .arrow-icon class, and the transition duration is 0.3s. This means that any changes to the transform property of the .arrow-icon will take 0.3 seconds to complete, creating a smooth animation effect
      className={`arrow-button ${props.sortDirection}`}
      onClick={() => props.handleSort(props.label)}
    >
      {props.title}
      <div className="arrow-icon">
        {props.sortDirection === "asc" ? <ArrowUp /> : <ArrowDown />}
      </div>
    </button>
  );
};

export default HeadButton;
