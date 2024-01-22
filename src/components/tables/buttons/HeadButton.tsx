import { FunctionComponent } from "react";

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
    <th className="t-head">
      <button
        disabled={props.title === "Actions"}
        // the styles of this btn will apply a smooth transition effect when clicking the button. The transition property is set on the .arrow-icon class, and the transition duration is 0.3s. This means that any changes to the transform property of the .arrow-icon will take 0.3 seconds to complete, creating a smooth animation effect
        className={`arrow-button ${
          props.title === "Actions" ? "arrow-button-actions disabled-btn" : ""
        }
      
      ${
        props.sortDirection === "asc"
          ? "arrow-button-sort-asc"
          : "arrow-button-sort-desc"
      }
      `}
        onClick={() => props.handleSort(props.label)}
      >
        <span>{props.title}</span>
      </button>
    </th>
  );
};

export default HeadButton;
