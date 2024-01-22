import { FunctionComponent } from "react";
import { tableHeaders } from "../../assets/data/certificateData";
import { tableButtonHeaderType } from "../../interfaces/types";
import { TableTopDivider } from "../divider/TableTopDivider";
import HeadButton from "./buttons/HeadButton";

interface CertifTableHeadProps {
  // tableHeaders: {
  //   label: string;
  //   title: string;
  // }[];
  handleSort: (label: string) => void;
  sortDirections: tableButtonHeaderType;
}

export const CertifTableHead: FunctionComponent<CertifTableHeadProps> = ({
  // tableHeaders,
  handleSort,
  sortDirections,
}) => {
  return (
    <thead className="t-header">
      <tr className="t-row">
        {tableHeaders?.map((buttonProps, index) => {
          const uniqueKey =
            buttonProps.label + buttonProps.title + String(index);
          return (
            <HeadButton
              key={uniqueKey}
              {...{
                ...buttonProps,
                handleSort,
              }}
              sortDirection={
                sortDirections[buttonProps.label as keyof typeof sortDirections]
              }
            />
          );
        })}
        {/* as keyof typeof sortDirections : type assertion to let TypeScript know that the value is one of the known keys. */}
      </tr>
      <TableTopDivider {...{ tableHeaders }} />
    </thead>
  );
};
